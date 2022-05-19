<template>
<div id="box">
    <div id="learn" class="learn1">
        <section id="learnText">
            <h2>why hesitate to register?</h2>
            <h1><span class="title">learn at your own pace</span></h1>
            <ul>
                <li>select & customize courses to your preferences</li>
                <li>change the tutor and make arrangements</li>
                <li>participate in events to join others</li>
                <li>get the desired certificate delivered at house</li>
            </ul>
        </section>
        <img src="../assets/images/home-5-image-01.png" alt="">
    </div>
        <div class="aba"><button class="myButton">get started for free</button></div>


    <div id="learn" class="learn2">
        <img src="../assets/images/home-5-image-02.png" alt="">
        <section id="learnText">
            <h2>why hesitate to register?</h2>
            <h1><span class="title">learn at your own pace</span></h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas corrupti adipisci dolorem sit alias, officiis porro ratione temporibus nihil!</h3>
            <button class="myButton">download our own app</button>
        </section>
    </div>

</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'learnBox',
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";

#box{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#learn{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#learnText{
    width: 40%;
}
.aba{
    position: relative;
    left: calc(50% - 100px);
    width: 250px;
}

</style>