<template>
  <div id="app">
    <app-header />
    <app-main />
  </div>
</template>

<script>
import AppHeader from './components/header.vue'
import AppMain from './components/main.vue'
//import AppFooter from './components/footer.vue'
import dati from './dati.json'

export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      datiMiei: dati
    }
  }
}


</script>

<style lang="scss">
*{
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}
#app{
  max-width: 1200px;
  margin: 0 auto;
}


.button {
  border-radius: 5px;
  background-color: #20AD96;
  border: none;
  color: white;
  padding: 18px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 8px 4px;
  cursor: pointer;
}
</style>
