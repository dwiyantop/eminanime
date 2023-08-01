# Project Name - README

This README.md file provides instructions on how to install and run the **Eminamine** project. Please follow the steps below to get the project up and running.

## Installation

1. **Make sure yarn or npm is installed**:
   Before proceeding, make sure you have either Yarn or npm (Node Package Manager) installed on your system. You can check if they are installed by running the following commands in your terminal or command prompt:
   
   ```bash
   yarn --version
   ```
   
   ```bash
   npm --version
   ```

   If either Yarn or npm is not installed, you can download and install them from their official websites:
   
   Yarn: https://yarnpkg.com/
   
   npm: https://www.npmjs.com/get-npm

2. **Install project dependencies**:
   In the root directory of the project, run the following command to install the required dependencies:

   ```bash
   yarn install
   ```
   
   or
   
   ```bash
   npm install
   ```

3. **Copy .env-sample to .env**:
   In the root directory of the project, locate the `.env-sample` file, and make a copy of it with the name `.env`. This file will contain your project configuration variables.

4. **Enter value of API_KEY**:
   Open the `.env` file in a text editor and find the variable `API_KEY`. Replace its value with your specific API key.

5. **Build the project**:
   To build the project, run the following command:

   ```bash
   yarn build
   ```
   
   or
   
   ```bash
   npm run build
   ```

6. **Start the project**:
   To start the project, run the following command:

   ```bash
   yarn start
   ```
   
   or
   
   ```bash
   npm start
   ```

7. **Visit localhost:8000**:
   Open your web browser and visit `localhost:8000` to access the running application.

## Testing

To run the tests, use the following command:

```bash
yarn test:ci
```

This command will execute the tests and provide the results.

Feel free to explore and use the **Eminamine** project. Happy coding! 😊