<template>
<div class="widthContainer">
    <h2>people are praising maxcoach</h2>
    <h1><span class="title">what make they <span class="accent">love us?</span></span></h1>
    <div id="cards">
        <ul>
            <li v-for="element in datiMiei.users" :key="element">
                <img :src="require('../assets/images/'+ element.image)">
                <h1><span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum provident reiciendis culpa nostrum pariatur incidunt praesentium quod ducimus doloribus!</span></h1>
                <h2>{{element.name}}</h2>
                <h3>/{{element.job}}</h3>
            </li>
        </ul>
    </div>
    <h2>Start today for getting online certification</h2>
    <h1>You can be your own guiding star with our help!</h1>
    <div class="aba"><button class="myButton">get started for free</button></div>
    <div class="spacer"></div>

</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'influencersCards',
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";

#cards{
    ul{
        display: flex;
        justify-content: space-evenly;
        text-align: center;

        img{
            width: 150px;
            border-radius: 50%;
        }
    }
}
.aba{
    position: relative;
    left: calc(50% - 100px);
    width: 250px;
}

</style>