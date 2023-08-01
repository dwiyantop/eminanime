import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import useDebounce from '../../src/hooks/useDebounce';

// Helper hook to simulate state changes in the test
function useMockState<T>(initialValue: T) {
  const [state, setState] = useState(initialValue);
  return { state, setState };
}

describe('useDebounce', () => {
  it('should debounce the value changes', () => {
    jest.useFakeTimers();

    const initialValue = 'hello';
    const delay = 500;
    const { result } = renderHook(() => useMockState(initialValue));

    const { setState } = result.current;
    const { result: debouncedResult } = renderHook(() => useDebounce(result.current.state, delay));

    // Verify the initial value
    expect(debouncedResult.current).toBe(initialValue);

    // Change the value and wait for the debounce delay to pass
    act(() => {
      setState('world');
      jest.advanceTimersByTime(delay - 1);
    });

    // Value should not have changed yet since the delay has not passed
    expect(debouncedResult.current).toBe(initialValue);

    // Wait for the debounce delay to pass
    act(() => {
      jest.advanceTimersByTime(1);
    });

    // Verify the debounced value has updated
    expect(debouncedResult.current).toBe('world');
  });

  it('should update debounced value immediately when delay is not provided', () => {
    jest.useFakeTimers();

    const initialValue = 'hello';
    const { result } = renderHook(() => useMockState(initialValue));

    const { setState } = result.current;
    const { result: debouncedResult } = renderHook(() => useDebounce(result.current.state));

    // Verify the initial value
    expect(debouncedResult.current).toBe(initialValue);

    // Change the value and wait for the debounce delay (default is 500ms)
    act(() => {
      setState('world');
      jest.advanceTimersByTime(500);
    });

    // Verify the debounced value has updated immediately
    expect(debouncedResult.current).toBe('world');
  });
});
