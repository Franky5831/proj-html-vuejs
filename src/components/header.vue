<template>
<header>
    <section id="searchBar">
        <img src="../assets/images/dark-logo.png" alt="">
        <ul>
            <li v-for="k in datiMiei.headerLink" :key="k">
                {{k[0]}}
            </li>
            <li>cart</li>
            <li>user</li>
            <form>
              <input />
              <button>Go</button>
            </form>
        </ul>
    </section>
    <section id="headerHero">
        <span id="headerHeroText">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque sint reprehenderit nesciunt aliquid praesentium dolores aut expedita, voluptas quidem.</h2>
        </span>
        <img src="../assets/images/home-5-hero-image.png" alt="">
    </section>

</header>
</template>


<script>
import dati from '../dati.json'

export default {
    name: 'AppHeader',
    methods:{},
    data(){
    return{
      datiMiei: dati
    }
  }
}


</script>

<style scoped lang="scss">
@import "../styles/vars.scss";

#searchBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 200px;
    }
    ul{
        display: flex;
        gap: 10px;
    }
}
#headerHero{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    #headerHeroText{
    width: 35%;
    h1{
        font-size: 40px;
    }
    }

}
</style>
