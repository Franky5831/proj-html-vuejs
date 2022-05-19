<template>
  <div id="app">
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/header.vue'
import AppMain from './components/main.vue'
import AppFooter from './components/footer.vue'
import dati from './dati.json'





export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      datiMiei: dati
    }
  }
}


</script>

<style lang="scss">
@import "./styles/general.scss";

*{
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}
.widthContainer{
  max-width: 1200px;
  margin: 0 auto;
}


.myButton {
  border-radius: 5px !important;
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

a{
  text-decoration: none;
}
</style>
