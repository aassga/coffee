/* import 引入 */
import Vue from 'vue'
import App from './App.vue'
import './../css/mainStyle.css'
/* import 引入 */

/* import 使用 */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
