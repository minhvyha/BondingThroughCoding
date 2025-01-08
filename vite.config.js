import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BondingThroughCoding/', // Replace <repository-name> with your repo's name
});