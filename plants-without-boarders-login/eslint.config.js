import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{vue,js,jsx,cjs,mjs}'],
    plugins: {
      vue: pluginVue
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      },
      parser: pluginVue.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // Vue rules
      'vue/multi-word-component-names': 'error',
      'vue/html-closing-bracket-newline': ['error', { 
        singleline: 'never', 
        multiline: 'always' 
      }],
      'vue/html-indent': ['error', 2],
      'vue/require-default-prop': 'error',
      'vue/require-explicit-emits': 'error',
      
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
];
