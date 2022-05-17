<template>
    <ul>
        <li v-for="elements in datiMiei.buildTeam" :key="elements">
            <img :src="require('../assets/images/'+ elements.image)">
            <h1>{{elements.title}}</h1>
            <h2>{{elements.text}}</h2>
            <a href="#">start now</a>
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
ul{
    background-color: green;
    display: flex;
    justify-content: space-evenly;
    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        img{
            max-height:200px;
        }
    }
}
</style>