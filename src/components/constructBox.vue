<template>
<div>
    <div id="construct">
    <img src="../assets/images/about-us-03-image-01.png" alt="">
    <section id="constructText">
      <h2>dream with maxcoach</h2>
      <h1><span class="title">construct a stunning career prospective</span></h1>
      <ul>
        <li v-for="elements in datiMiei.constructCards" :key="elements">
          <div class="constructCardTop">{{elements.title}}</div>
          <div class="constructCardBottom">{{elements.description}}</div>
        </li>
      </ul>
    </section>
    </div>
      <span id="data">
        <ul>
          <li>1.926</li>
          <li>finished sessions</li>
        </ul>
        <ul>
          <li>3.092+</li>
          <li>enrolled learners</li>
        </ul>
        <ul>
          <li>200</li>
          <li>online instructors</li>
        </ul>
        <ul>
          <li>100%</li>
          <li>satisfaction rate</li>
        </ul>
    </span>
</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'constructBox',
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";

#construct{
  display: flex;
}
.constructCardTop{
  width: 100%;
}
#data{
  display: flex;
  justify-content: space-evenly;
}
</style>