<template>
    <ul>
        <li v-for="elements in datiMiei.buildTeam" :key="elements">
            <img :src="require('../assets/images/'+ elements.image)">
            <h1>{{elements.title}}</h1>
            <h2>{{elements.text}}</h2>
            <a href="#"><span class="title">start now</span></a>
        </li>
    </ul>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'buildCards',
    methods:{},
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/general.scss";

ul{
    display: flex;
    justify-content: space-evenly;
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        img{
            max-height:250px;
            width: auto;
        }
    }
}
</style>