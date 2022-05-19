<template>
<div class="widthContainer">
    <ul>
        <li v-for="elements in datiMiei.buildTeam" :key="elements">
            <img :src="require('../assets/images/'+ elements.image)">
            <h1>{{elements.title}}</h1>
            <h2>{{elements.text}}</h2>
            <a href="#"><span class="title">start now <i class="fa-solid fa-arrow-right"></i></span></a>
        </li>
    </ul>
    <div class="spacer"></div>
</div>

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
        align-items: center;
        img{
            max-width:150px;
            height: auto;
        }
    }
}
a{
    text-decoration: none;
}
</style>