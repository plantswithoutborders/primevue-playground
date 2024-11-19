<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%);">
        <div
          class="w-full surface-card py-8 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div class="text-center mb-5">
            <img
              src="@/assets/logo.png"
              alt="PlantsWithoutBoarders Logo"
              class="mb-5"
              style="width: 150px"
            >
            <div class="text-900 text-3xl font-medium mb-3">
              Welcome to PlantsWithoutBoarders!
            </div>
            <span class="text-600 font-medium">Sign in to your account</span>
          </div>

          <div>
            <PrimeMessage
              v-if="error"
              severity="error"
              :closable="false"
              class="mb-4"
            >
              {{ error }}
            </PrimeMessage>
            
            <form @submit.prevent="handleLogin">
              <label
                for="email"
                class="block text-900 font-medium mb-2"
              >Email</label>
              <PrimeInputText 
                id="email" 
                v-model="email" 
                type="text" 
                placeholder="Email address" 
                class="w-full mb-3" 
                :class="{'p-invalid': submitted && !email}"
              />
              <small
                v-if="submitted && !email"
                class="p-error"
              >Email is required.</small>

              <label
                for="password"
                class="block text-900 font-medium mb-2 mt-3"
              >Password</label>
              <PrimePassword 
                id="password" 
                v-model="password" 
                placeholder="Password" 
                :toggle-mask="true"
                :feedback="false"
                class="w-full mb-3"
                input-class="w-full"
                :class="{'p-invalid': submitted && !password}"
              />
              <small
                v-if="submitted && !password"
                class="p-error"
              >Password is required.</small>

              <div class="flex align-items-center justify-content-between mb-6 mt-4">
                <div class="flex align-items-center">
                  <PrimeCheckbox
                    id="rememberme"
                    v-model="rememberMe"
                    binary
                    class="mr-2"
                  />
                  <label for="rememberme">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
              </div>

              <PrimeButton 
                type="submit" 
                label="Sign In" 
                icon="pi pi-user" 
                class="w-full p-3 text-xl"
              />
            </form>

            <PrimeDivider
              align="center"
              class="my-6"
            >
              <span class="text-600 font-normal text-sm">OR</span>
            </PrimeDivider>

            <div class="flex gap-3">
              <PrimeButton 
                label="Google" 
                icon="pi pi-google" 
                class="w-6 p-3 text-xl"
                severity="secondary"
                outlined
              />
              <PrimeButton 
                label="Facebook" 
                icon="pi pi-facebook" 
                class="w-6 p-3 text-xl"
                severity="success"
                raised
              />
            </div>
          </div>
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
:deep(.p-password input) {
  width: 100%;
}

:deep(.p-password) {
  width: 100%;
}

:deep(.p-button.p-button-icon-only) {
  width: 3rem;
}
</style> 