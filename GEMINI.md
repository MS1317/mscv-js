# Project Overview

This is a React single-page application built with Vite. It is deployed on Vercel and uses Vercel Postgres (Neon) for its database.

**Key Technologies:**

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Bootstrap
*   **Routing:** React Router DOM
*   **Backend:** Node.js with Express.js
*   **Database:** Vercel Postgres (Neon) with the `pg` driver
*   **Environment Variables:** dotenv
*   **Development Server:** Nodemon

**Architecture:**

The project follows a standard single-page application (SPA) architecture. The frontend is a Vite-powered React app. The backend is a single Node.js/Express server (`server.js`) that connects to a Postgres database and serves a JSON API.

During local development, Vite's dev server proxies API requests to the backend server.

# Building and Running

To set up and run the project locally, you must have the [Vercel CLI](https://vercel.com/docs/cli) installed.

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Link to Vercel Project:**

    Connect your local repository to the project on Vercel. This is a one-time setup.
    ```bash
    vercel link
    ```

3.  **Pull Environment Variables:**

    Create a local `.env` file with the project's development credentials.
    ```bash
    vercel env pull .env
    ```

4.  **Run the Development Servers:**

    You need to run the backend and frontend servers in two separate terminals.

    **In Terminal 1, start the backend server:**
    ```bash
    npm run server
    ```

    **In Terminal 2, start the frontend server:**
    ```bash
    npm run dev
    ```
    Your browser should open to the Vite development server (e.g., `http://localhost:5173`).

5.  **Build for Production:**

    Vercel handles this automatically on `git push`. To build locally, run:
    ```bash
    npm run build
    ```

# Development Conventions

*   **API Proxy:** During local development, all API calls to `/api` are automatically forwarded to the backend server on port 3001, as configured in `vite.config.js`.
*   **Environment Variables:** The project relies on environment variables provided by Vercel for the database connection (e.g., `POSTGRES_URL`). The `.env.example` file is no longer representative of the required variables for local development.