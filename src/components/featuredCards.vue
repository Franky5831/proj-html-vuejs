<template>
<section id="featuredCards">
    <h2>choose where you'd like to begin</h2>
    <h1>latest featured courses</h1>
    <ul>
      <li v-for="element in datiMiei.courses" :key="element">
        <div class="courseImage">
          {{element.coursePrice}}
        </div>
      </li>
    </ul>
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
ul{
  display: flex;
  flex-wrap: wrap;
}
.courseImage{
  background-color: orange;
  width: 20vw;
  height: 13vw;

}

</style>