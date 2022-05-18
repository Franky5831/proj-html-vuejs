<template>
<div>
    <h2>people are praising maxcoach</h2>
    <h1><span class="title">what make they love us?</span></h1>
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
@import "../styles/vars.scss";

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

</style>