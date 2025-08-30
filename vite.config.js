import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Parse the boolean value
  const isUnderConstruction = env.VITE_UNDER_CONSTRUCTION === 'true';

  return {
    plugins: [react()],
    define: {
      // Expose the variable globally to the client-side code
      'isUnderConstruction': JSON.stringify(isUnderConstruction)
    }
  };
});