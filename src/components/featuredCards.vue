<template>
<section id="featuredCards">
    <h2>choose where you'd like to begin</h2>
    <h1>latest featured courses</h1>
</section>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'featuredCards',
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>

</style>