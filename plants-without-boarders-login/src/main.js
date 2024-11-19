import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

// Import PrimeVue components
import PrimeInputText from 'primevue/inputtext'
import PrimePassword from 'primevue/password'
import PrimeButton from 'primevue/button'
import PrimeCard from 'primevue/card'
import PrimeCheckbox from 'primevue/checkbox'
import PrimeDivider from 'primevue/divider'
import PrimeMessage from 'primevue/message'

// Import PrimeVue styles
import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })

// Register PrimeVue components with multi-word names
app.component('PrimeInputText', PrimeInputText)
app.component('PrimePassword', PrimePassword)
app.component('PrimeButton', PrimeButton)
app.component('PrimeCard', PrimeCard)
app.component('PrimeCheckbox', PrimeCheckbox)
app.component('PrimeDivider', PrimeDivider)
app.component('PrimeMessage', PrimeMessage)

app.mount('#app')
