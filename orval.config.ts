import { defineConfig } from 'orval';

export default defineConfig({
  tmdb: {
    input: {
      target: './src/common/api/schema.json'
    },
    output: {
      client: 'axios',
      target: './src/common/api/generated/endpoints.ts',
      schemas: './src/common/api/generated/model',
      prettier: true
    }
  }
});
