import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
    ...nextVitals,
    globalIgnores(['.next/**', 'node_modules/**', 'scripts/**']),
    {
        rules: {
            // Site en français : les apostrophes et guillemets typographiques dans le JSX sont voulus.
            'react/no-unescaped-entities': 'off',
        },
    },
]);
