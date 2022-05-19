<template>
<section id="featuredCards" class="widthContainer">
    <h2>choose where you'd like to begin</h2>
    <h1><span class="title">Latest Featured <span class="accent">Courses</span></span></h1>
    <ul>
      <li v-for="element in datiMiei.courses" :key="element">
        <div class="courseImage" :style="{ 'background-image': 'url('+element.courseImage+')' }">
          <span class="price">{{element.coursePrice}}</span>
        </div>
        <div class="textBox">
          <div class="userBox">
            <img :src="require('../assets/images/'+ element.authorImage)">
            <span>{{element.authorName}}</span>
          </div>
          <h1>{{element.title}}</h1>
          <div class="infoBox">
            <span>{{element.lessonsNumber}}</span>
            <span>{{element.lessonsStudents}}</span>
          </div>
        </div>
      </li>
    </ul>
    <button class="myButton">view all courses</button>
    <div class="spacer"></div>
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
@import "../styles/general.scss";

.infoBox{
  span{
    padding: 0 10px;
    font-weight: 500;
    color: rgb(88, 88, 90);
    font-size: 14px;
  }
}

.textBox{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 9px;
  padding: 5%;
  h1{
    font-size: 20px !important;
    font-weight: 600;
  }
}

#featuredCards{
  display: flex;
  flex-direction: column;
  align-items: center;
  >h1{
    margin-bottom: 40px;
    font-weight: 900;
    font-size: 40px;
  }
  >h2{
      font-weight: 500;
      color: rgb(88, 88, 90);
      font-size: 14px;
      text-transform: uppercase;
  }
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  li{
      width: 30%;
  }
}
.courseImage{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 13vw;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  .price{
    font-weight: 700;
    background-color: $green-water;
    padding: 12px 30px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 0 5px;
  }
}
.userBox{
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(43, 43, 43);
  span{
    color: rgb(90, 90, 90);
    font-weight: 600;
  }
  img{
    width: 40px;
    border-radius: 50%;
  }
}





</style>