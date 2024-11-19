<template>
  <LoginForm />
</template>

<script>
import LoginForm from './components/Login.vue'

export default {
  name: 'App',
  components: {
    LoginForm
  }
}
</script>

<style>
/* Reset default margins */
body {
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #4CAF50;
  --primary-color-text: #ffffff;
  --surface-ground: #f3f7f3;
  --surface-section: #ffffff;
  --surface-card: #ffffff;
  --surface-overlay: #ffffff;
  --surface-border: #dfe7df;
  --text-color: #495057;
  --text-color-secondary: #6c757d;
  --primary-dark: #388E3C;
  --primary-darker: #2E7D32;
}

/* Override PrimeVue button colors */
.p-button {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.p-button:hover {
  background: var(--primary-dark) !important;
  border-color: var(--primary-dark) !important;
}

/* Override link colors */
.text-blue-500 {
  color: var(--primary-color) !important;
}

.text-blue-500:hover {
  color: var(--primary-dark) !important;
}
</style>
