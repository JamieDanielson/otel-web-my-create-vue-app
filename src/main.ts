import './assets/main.css'

import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web'
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web'

const sdk = new HoneycombWebSDK({
  apiKey: 'YOUR_KEY_HERE',
  serviceName: 'create-vue',
  instrumentations: [getWebAutoInstrumentations()] // add auto-instrumentation
})
sdk.start()

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
