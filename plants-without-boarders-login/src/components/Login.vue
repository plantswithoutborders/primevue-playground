<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="login-container">
      <!-- Left Panel - Brand/Image -->
      <div class="left-panel hidden lg:flex flex-column align-items-center justify-content-center">
        <img
          src="@/assets/logo.png"
          alt="PlantsWithoutBoarders Logo"
          class="mb-5 large-logo"
        >
        <p class="text-white text-xl">Connect with plant lovers worldwide</p>
      </div>

      <!-- Right Panel - Login Form -->
      <div class="right-panel flex flex-column align-items-center justify-content-center p-4">
        <div class="login-card">
          <!-- Mobile Logo -->
          <div class="text-center mb-5 lg:hidden">
            <img
              src="@/assets/logo.png"
              alt="PlantsWithoutBoarders Logo"
              class="mb-3"
              style="width: 100px"
            >
          </div>

          <h2 class="text-900 text-3xl font-medium mb-3">Welcome Back</h2>
          <p class="text-600 mb-5">Sign in to your account</p>

          <PrimeMessage
            v-if="error"
            severity="error"
            :closable="false"
            class="mb-4"
          >
            {{ error }}
          </PrimeMessage>
          
          <form @submit.prevent="handleLogin" class="w-full">
            <div class="mb-4">
              <label for="email" class="block text-900 font-medium mb-2">Email</label>
              <PrimeInputText 
                id="email" 
                v-model="email" 
                type="text" 
                placeholder="Enter your email" 
                class="w-full p-input-lg" 
                :class="{'p-invalid': submitted && !email}"
              />
              <small v-if="submitted && !email" class="p-error">Email is required.</small>
            </div>

            <div class="mb-4">
              <label for="password" class="block text-900 font-medium mb-2">Password</label>
              <PrimePassword 
                id="password" 
                v-model="password" 
                placeholder="Enter your password" 
                :toggle-mask="true"
                :feedback="false"
                class="w-full"
                input-class="w-full p-input-lg"
                :class="{'p-invalid': submitted && !password}"
              />
              <small v-if="submitted && !password" class="p-error">Password is required.</small>
            </div>

            <div class="flex align-items-center justify-content-between mb-4">
              <div class="flex align-items-center">
                <PrimeCheckbox
                  id="rememberme"
                  v-model="rememberMe"
                  binary
                  class="mr-2"
                />
                <label for="rememberme" class="text-900">Remember me</label>
              </div>
              <a class="font-medium no-underline text-primary cursor-pointer hover:text-primary-dark">
                Forgot password?
              </a>
            </div>

            <PrimeButton 
              type="submit" 
              label="Sign In" 
              icon="pi pi-user" 
              class="w-full p-button-lg mb-4"
            />

            <PrimeDivider align="center" class="my-4">
              <span class="text-600 font-normal text-sm">OR CONTINUE WITH</span>
            </PrimeDivider>

            <div class="flex gap-3 justify-content-center">
              <PrimeButton 
                icon="pi pi-google" 
                class="p-button-lg social-button"
                severity="secondary"
                text
                raised
                aria-label="Sign in with Google"
              />
              <PrimeButton 
                icon="pi pi-facebook" 
                class="p-button-lg social-button"
                severity="secondary"
                text
                raised
                aria-label="Sign in with Facebook"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LoginForm',
  setup() {
    const email = ref('')
    const password = ref('')
    const rememberMe = ref(false)
    const submitted = ref(false)
    const error = ref('')

    const handleLogin = () => {
      submitted.value = true
      error.value = ''

      if (email.value && password.value) {
        // Simulate login attempt
        console.log('Login attempt:', {
          email: email.value,
          password: password.value,
          rememberMe: rememberMe.value
        })
      } else {
        error.value = 'Please fill in all required fields'
      }
    }

    return {
      email,
      password,
      rememberMe,
      submitted,
      error,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  background: var(--surface-card);
  border-radius: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 
              0 1px 1px 0 rgba(0,0,0,0.14), 
              0 1px 3px 0 rgba(0,0,0,0.12);
  overflow: hidden;
}

.left-panel {
  flex: 1;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  padding: 3rem;
  position: relative;
}

.right-panel {
  flex: 1;
  background: var(--surface-card);
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 2rem;
}

.large-logo {
  width: 200px;
  height: auto;
}

.social-button {
  width: 3rem !important;
  height: 3rem !important;
}

:deep(.p-password input) {
  width: 100%;
}

:deep(.p-password) {
  width: 100%;
}

:deep(.p-inputtext) {
  padding: 1rem;
}

:deep(.p-button.p-button-lg) {
  padding: 1rem;
}

@media screen and (max-width: 991px) {
  .login-container {
    flex-direction: column;
    max-width: 480px;
    margin: 1rem;
  }

  .left-panel {
    display: none;
  }

  .right-panel {
    padding: 2rem 1.5rem;
  }

  .login-card {
    padding: 0;
  }
}
</style> 