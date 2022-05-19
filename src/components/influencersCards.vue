<template>
<div class="widthContainer">
    <h2>people are praising maxcoach</h2>
    <h1><span class="title">what make they <span class="accent">love us?</span></span></h1>
    <div id="cards">
        <ul>
            <li v-for="element in datiMiei.users" :key="element">
                <img :src="require('../assets/images/'+ element.image)">
                <h1><span class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum provident reiciendis culpa nostrum pariatur incidunt praesentium quod ducimus doloribus!</span></h1>
                <h2>{{element.name}}</h2>
                <h3>/{{element.job}}</h3>
            </li>
        </ul>
    </div>
    <div id="lower">
        <h2><span class="title">Start today for getting <span class="accent"> online certification</span></span></h2>
        <h1><span class="title">You can be your own guiding star with our help!</span></h1>
        <div class="aba"><button class="myButton">get started for free</button></div>
    </div>
    <div class="spacer"></div>

</div>
</template>

<script>
import dati from '../dati.json'

export default {
    name: 'influencersCards',
    data(){
    return{
      datiMiei: dati
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../styles/general.scss";


#lower{
    margin-top: 100px;
    text-align: center;
    background-image: url(../assets/images/maxcoach-shape-01.png), url(../assets/images/maxcoach-shape-02.png);
    background-position: left top, right bottom;
    background-repeat: no-repeat;
    h1>span{
        font-weight: 600 !important;
    }
    h2>span{
        font-weight: 500 !important;
    }
}

.widthContainer>h2{
    color: rgb(77, 77, 77);
    text-transform: uppercase;
    font-size: 18px;
}
.widthContainer>h2, .widthContainer>h1{
    text-align: center;
}
.widthContainer>h1{
    margin-bottom: 80px;
}
#cards{
    ul{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        li{
            h1{
                margin-top: 10px !important;
                font-size: 14px;
                width: 70%;
                margin: 0 auto;
                margin-bottom: 10px;
                span{
                    font-weight: 500;
                }
            }
            h2{
                text-transform: uppercase;
                font-size: 15px;
                font-weight: 600;
            }
            h3{
                font-size: 14px;
                color: rgb(77, 77, 77);
                font-weight: 400;
            }
        }

        img{
            width: 150px;
            border-radius: 50%;
        }
    }
}
.aba{
    position: relative;
    left: calc(50% - 100px);
    width: 250px;
}

</style>