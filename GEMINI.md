# Project Overview

This is a React single-page application built with Vite. It utilizes several key libraries for its functionality and styling.

**Key Technologies:**

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Bootstrap
*   **JavaScript Library:** jQuery
*   **Routing:** React Router DOM
*   **Animations:** Lottie React
*   **Backend:** Node.js with Express.js
*   **Database:** MySQL2
*   **Environment Variables:** dotenv
*   **Development Server:** Nodemon

**Architecture:**

The project follows a standard single-page application (SPA) architecture, with frontend components organized under the `src/components` directory and pages under `src/pages`. The backend is implemented with Node.js and Express.js (`server.js`) and interacts with a MySQL database (`db.js`).

# Building and Running

To set up and run the project locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Frontend in Development Mode:**

    Starts the development server with hot module replacement.

    ```bash
    npm run dev
    ```

3.  **Run Backend Server:**

    Starts the Node.js backend server with nodemon for automatic restarts.

    ```bash
    npm run server
    ```

4.  **Build for Production:**

    Compiles the project for production deployment.

    ```bash
    npm run build
    ```

5.  **Preview Production Build:**

    Serves the production build locally for testing.

    ```bash
    npm run preview
    ```

# Development Conventions

*   **Linting:** ESLint is configured to maintain code quality and consistency. It uses recommended rules for JavaScript, React Hooks, and Vite, and is configured for both browser and Node.js environments. A custom rule `no-unused-vars` is also in place.
*   **Environment Variables:** The `.env.example` file outlines the environment variables used. These include `PORT` for the backend server, database credentials (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE`), and `VITE_UNDER_CONSTRUCTION` for frontend behavior.
