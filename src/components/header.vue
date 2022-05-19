<template>
<header>
    <div class="widthContainer">
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
          <input placeholder="Search..." />
          <button>Go</button>
        </form>
        </div>
    </section>
    <section id="headerHero">
        <span id="headerHeroText">
            <h1><span class="title">Complete Your Dreams in JavaS Programming</span></h1>
            <h2>Learn any coding program in distance and for a resonable fee. You don't have to struggle alone, you've got our assistance and help.</h2>
            <button class="myButton"><i class="fa-solid fa-download"></i> Download free E-book</button>
        </span>
        <img src="../assets/images/home-5-hero-image.png" alt="">

    </section>
    <div class="spacer"></div>
    </div>
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
header{
    background-image: url('../assets/images/headerBackDIY.png');
}
form{
    height: 40px;
    input{
        height: 100%;
        border-radius: 5px 0 0 5px;
        border: 0;
        padding-left: 20px; 
    }
    button{
        height: 100%;
        width: 40px;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: $green-water;
    }
}
h2{
    font-size: 18px;
    color: #9D9AAE;
}

#dropdownsSec{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

#searchBar{
    padding: 30px 0;
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
        h1, h2, button{
            margin: 20px 0;
        }
        width: 35%;
        h1{
            font-size: 40px;
        }
    }

}
</style>
