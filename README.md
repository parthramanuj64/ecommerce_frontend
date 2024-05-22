# E-commerce Dashboard Frontend

This is the frontend for the E-commerce Dashboard application built with React. This application provides a user interface for managing customers, products, transactions, and payments.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or higher)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/parthramanuj64/ecommerce_frontend.git
   cd ecommerce_frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up base URL:**

   - Open `utils/app_services.js` file.
   - Set the `baseURL` variable to the backend URL where your backend server is running.

   ```javascript
   const baseURL = "http://localhost:8000"; // Set your backend URL here
   ```

4. **Set up proxy in `package.json`:**

   - Open `package.json` file.
   - Set the `proxy` field to your backend URL.

   ```json
   "proxy": "http://localhost:8000"
   ```

### Running the Application

1. **Start the development server:**

   ```sh
   npm run dev
   ```
