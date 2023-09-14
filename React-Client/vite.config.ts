import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/golang': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/golang/, ''),
        secure: false,
      },
      '/api/node': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/node/, ''),
        secure: false,
      },
    },
  },
});

/*
1. **Imports**: The code begins by importing some functions and modules. `defineConfig` is a function from the Vite library that helps define the configuration for your project. `react` is a plugin for Vite that enables you to use React for building your web application. Finally, `dns` is a built-in Node.js module that is used to configure DNS settings.

2. **DNS Configuration**: The line `dns.setDefaultResultOrder('verbatim')` is configuring the behavior of the DNS module. It's setting the default result order to 'verbatim,' which means it will return DNS results exactly as they are received, without reordering them.

3. **Configuration Object**: The `export default defineConfig({ ... })` block defines the main configuration for your Vite project. Here's what it contains:

   - `plugins`: This section specifies the plugins you want to use with Vite. In this case, it's using the `react` plugin, which allows you to work with React in your project.

   - `server`: This section configures the development server for your project. It specifies a few proxy settings:

     - `/api/golang` requests will be proxied to `http://localhost:8080`. This means that when your application makes a request to `/api/golang`, it will actually be sent to `http://localhost:8080/api/golang`. The `changeOrigin` option ensures that the origin of the request is changed to match the target. The `rewrite` function modifies the request path, removing the `/api/golang` prefix. Finally, `secure` is set to `false`, which means that the proxy server won't verify SSL certificates for the target.

     - `/api/node` requests will be proxied to `http://localhost:3000` in a similar manner.

So, in simple terms, this configuration file is setting up a development environment for a web application using Vite. It uses the React plugin, configures DNS behavior, and sets up two proxy routes to redirect certain requests to different backend servers during development.
*/