<template>
<section id="featuredCards">
    <h2>choose where you'd like to begin</h2>
    <h1>latest featured courses</h1>
    <ul>
      <li v-for="element in datiMiei.courses" :key="element">
        <div class="courseImage" style="background-color: orange" v-bind:style="{ 'background-image': 'url(' + '../assets/images/'+  element.courseImage + ')' }">
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
    <button class="button">view all courses</button>
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

h1:first-letter{
  text-transform: uppercase;
}


#featuredCards{
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.courseImage{
  width: 20vw;
  height: 13vw;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  .price{
  background-color: #20AD96;
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
  img{
    width: 40px;
    border-radius: 50%;
  }
}



.button {
  border-radius: 5px;
  background-color: #20AD96;
  border: none;
  color: white;
  padding: 18px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 8px 4px;
  cursor: pointer;
}

</style>