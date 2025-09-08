# Project Overview

This is a React single-page application built with Vite. It is deployed on Vercel and uses Vercel Postgres (Neon) for its database.

**Key Technologies:**

*   **Frontend Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Bootstrap
*   **Routing:** React Router DOM
*   **Loading Skeleton:** React Loading Skeleton
*   **Backend:** Node.js with Express.js
*   **Database:** Vercel Postgres (Neon) with the `pg` driver
*   **Environment Variables:** dotenv

---

# Architecture

The project follows a standard single-page application (SPA) architecture, with a Vite-powered React frontend and a Node.js/Express backend (`server.js`).

## Database Environments

This project uses Vercel Postgres's branching feature to maintain separate, isolated databases for different environments. This is a best practice that protects the production data.

-   **Production Database:** Used by the deployment on the `main` git branch.
-   **Preview/Development Database:** Each git branch (e.g., `dev`) has its own separate database branch. This is used for both preview deployments on Vercel and for local development.

## Routing

API request routing is handled differently depending on the environment:

-   **Local Development:** The `vite.config.js` file uses a `proxy` to forward any requests from the frontend (e.g., `localhost:5173/api/...`) to the backend server running separately (e.g., on `localhost:3001`).
-   **Vercel Deployment (Preview/Production):** A `vercel.json` file tells the Vercel platform how to route requests. It directs all incoming requests for `/api/...` to be handled by the `server.js` serverless function.

---

# Local Development Setup

To run the project locally, you must have the [Vercel CLI](https://vercel.com/docs/cli) installed.

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

    Create a local `.env` file. This command pulls the credentials for the database branch that corresponds to your **current git branch**.
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
    Your browser will open to the Vite development server (e.g., `http://localhost:5173`).

---

# Deployment

Deployment is handled automatically by Vercel. Pushing to a branch will create a **preview deployment**, and merging to `main` will update the **production deployment**.