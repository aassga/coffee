# 1.moustache 建置全新 Vue CLI 專案
  ```
  $ npm install -g @vue/cli 
  $ vue create moustache
  ```
# 2.建立 bootstrap-vue 
  - 專案目錄下輸入
    ```
    $ npm install vue bootstrap-vue bootstrap --save
    ```
  - main.js 加上
    ```
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    Vue.use(BootstrapVue)
    ```
