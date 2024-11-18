import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set this to '/' if you're hosting at the root or a specific path if necessary
});
