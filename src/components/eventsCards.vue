<template>
<div class="widthContainer">
    <h2>get in contact now</h2>
    <h1><span class="title">upcoming <span class="accent">events</span></span></h1>
    <ul>
        <li class="dateCard" v-for="elemento in datiMiei.dates" :key="elemento">
            <div class="dateCardLeft">
                <h2>{{elemento.location}}</h2>
                <h1>{{elemento.eventName}}</h1>
            </div>
            <div class="dateCardRight">
                <div class="dateCardRightContent">
                    <h1>{{elemento.date.day}}</h1>
                    <h2>{{elemento.date.month}}</h2>
                    <button class="myButton">get ticket</button>
                </div>
            </div>
        </li>
    </ul>
    <h2>excited about our event? view all events</h2>
    <div class="spacer"></div>
</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'eventsCards',
    data(){
    return{
      datiMiei: dati
    }
  }
}
        // {"name": "",
        // "job": "",
        // "image": "",
        // "userPara": ""
        // },
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";

ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px 0;

    .dateCard{
        padding: 30px 0;
        display: flex;
        flex-direction: row;
        width: 40%;
        .dateCardLeft{
            width: 60%;
        }
        .dateCardRight{
            width: 40%;
            display: flex;
            flex-direction: row-reverse;
            .dateCardRightContent{
                display: flex;
                flex-direction: column;
                text-align: center;
            }
        }
    }
}

</style>