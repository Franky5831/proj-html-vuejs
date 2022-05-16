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
</style>
