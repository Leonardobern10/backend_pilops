import { defineConfig } from 'vitest/config';

// Configuração para que os tests achem o arquivo
// com as "variaveis"
export default defineConfig({
    test: {
        setupFiles: './tests/setup.ts'
    }
});
