<template>
<div class="widthContainer">
    <div id="construct">
      <div id="constructBlock">
        <img src="../assets/images/about-us-03-image-01.png" alt="">
        <section id="constructText">
          <h2>dream with maxcoach</h2>
          <h1><span class="title">construct a <span class="accent">stunning</span> career prospective</span></h1>
          <ul>
            <li v-for="elements in datiMiei.constructCards" :key="elements" id="constructBoxCont">
              <div class="constructCardTop">{{elements.title}} <i class="fa-solid fa-circle-minus"></i></div>
              <div class="constructCardBottom">{{elements.description}}</div>
            </li>
          </ul>
        </section>
      </div>

    </div>
    <div class="spacer"></div>
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
    <div class="spacer"></div>
</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'constructBox',
        methods:{
      btnPress(){
        
      }
    },
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";
#constructBoxCont{
  div:first-child{
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 1.3rem;
  }
}
#constructBlock{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  img{
    max-width: 350px;
    height: auto;
  }
}
#constructText{
  width: 70% !important;
  h1{
    width: 100%;
  }
  ul{
    width: 70%;
    li{
      margin: 20px 0;
    }
  }
}
ol, ul{
  padding: 0 !important;
}
li>div{
  padding: 20px;
}
#construct{
  display: flex;
  justify-content: space-around;
}
.constructCardTop{
  width: 100%;
  background-color: $green-water;
  border-radius: 5px 5px 0 0;
}
.constructCardBottom{
  width: 100%;
  background-color: white;
  border-radius: 5px 5px 0 0;
}

#data{
  display: flex;
  justify-content: space-evenly;
  >ul{
    text-align: center;
    >li:first-child{
      font-weight: 900;
      color: $green-water;
      font-size: 40px;
    }
    >li:last-child{
      font-weight: 700;
      color: rgb(65, 66, 78);
      font-size: 14px;
      text-transform: uppercase;
    }
  }
}
</style>