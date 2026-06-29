import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Contourne la limite système de watchers inotify (erreur ENOSPC) en
    // utilisant le polling plutôt que les watchers natifs du noyau.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
});
