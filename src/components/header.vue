<template>
<header>
    <section id="searchBar">
        <img src="../assets/images/dark-logo.png" alt="">
        <div id="dropdownsSec">
            <div class="dropdown" v-for="element in datiMiei.headerLink" :key="element">
                <button class="btn dropdown-toggle" type="myButton" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{element[0]}}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <form>
          <input />
          <button>Go</button>
        </form>
        </div>
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
@import "../styles/general.scss";
form{
    height: 40px;
    input{
        height: 100%;
    }
    button{
        height: 100%;
        width: 40px;
    }
}


#dropdownsSec{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

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
