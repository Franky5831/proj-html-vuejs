<template>
<div class="widthContainer">
    <h2>get in contact now</h2>
    <h1><span class="title">upcoming <span class="accent">events</span></span></h1>
    <ul>
        <li class="dateCard" v-for="elemento in datiMiei.dates" :key="elemento">
            <div class="dateCardLeft">
                <h2><i class="fa-solid fa-location-dot"></i> {{elemento.location}}</h2>
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
    <h2>excited about our event? <a href="#">view all events <i class="fa-solid fa-arrow-right"></i></a></h2>
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

h2{
    font-size: 18px;
    color: rgb(77, 77, 77);
    a{
        color: $green-water !important;
    }
}


.widthContainer{
    text-align: center;
}



ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px 0;

    .dateCard{
        text-align: left;
        padding: 30px 0;
        display: flex;
        flex-direction: row;
        width: 40%;
        .dateCardLeft{
            width: 60%;
            h2{
                font-size: 14px;
                color: rgb(77, 77, 77);
            }
            h1{
                font-size: 20px;
                color: black;
                font-weight: 600;
            }
        }
        .dateCardRight{
            h1{
                color: $green-water;
            }
            h2{
                text-transform: uppercase;
                font-size: 18px;
            }
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