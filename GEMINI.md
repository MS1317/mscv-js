# Project Overview

This is a React single-page application built with Vite. It utilizes several key libraries for its functionality and styling.

**Key Technologies:**

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Bootstrap
*   **JavaScript Library:** jQuery
*   **Routing:** React Router DOM
*   **Animations:** Lottie React

**Architecture:**

The project follows a standard single-page application (SPA) architecture, with components organized under the `src/components` directory and pages under `src/pages`.

# Building and Running

To set up and run the project locally, follow these steps:

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run in Development Mode:**

    Starts the development server with hot module replacement.

    ```bash
    npm run dev
    ```

3.  **Build for Production:**

    Compiles the project for production deployment.

    ```bash
    npm run build
    ```

4.  **Preview Production Build:**

    Serves the production build locally for testing.

    ```bash
    npm run preview
    ```

# Development Conventions

*   **Linting:** ESLint is configured to maintain code quality and consistency. It uses recommended rules for JavaScript, React Hooks, and Vite. A custom rule `no-unused-vars` is also in place.
*   **Environment Variables:** The `VITE_UNDER_CONSTRUCTION` environment variable is used in `vite.config.js` to conditionally control application behavior.
