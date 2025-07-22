import { defineConfig, loadEnv } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command, mode }) => {
  // Загружаем переменные окружения из .env файла в корне проекта
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('src/**/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      proxy: {
        // Все запросы, начинающиеся с /api, будут перенаправлены на сервер Pixabay
        '/api': {
          target: 'https://pixabay.com/api',
          changeOrigin: true, // Необходимо для виртуальных хостов
          rewrite: path => {
            // Убираем /api из пути и добавляем секретный ключ из переменных окружения
            const newPath = path.replace(/^\/api/, '');
            const separator = newPath.includes('?') ? '&' : '?';
            return `${newPath}${separator}key=${env.PIXABAY_API_KEY}`;
          },
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
