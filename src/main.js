import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"



import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

Vue.component('font-awesome-icon', FontAwesomeIcon)






Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
