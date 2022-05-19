<template>
<main>
    <section id="buildDreamSec">
        <div class="widthContainer">
            <h2 class="smallTitle" style="margin-top: 80px;">start learning coding languages</h2>
            <h1><span class="title">Build Your Dream <span class="accent">TODAY</span></span></h1>
        </div>
        <build-cards/>
        <construct-box/>
        <featured-cards/>
        <learn-box/>
        <events-cards/>
        <influencers-cards/>
    </section>
</main>
</template>


<script>
import buildCards from './buildCards.vue';
import constructBox from './constructBox.vue';
import featuredCards from './featuredCards.vue';
import learnBox from './learnBox.vue'
import eventsCards from './eventsCards.vue'
import influencersCards from './influencersCards.vue'

export default{
    name: 'AppMain',
    components:{
        buildCards,
        constructBox,
        featuredCards,
        learnBox,
        eventsCards,
        influencersCards
    },
    data(){},
}

</script>

<style scoped lang="scss">
@import "../styles/general.scss";
#buildDreamSec{
    .widthContainer{
        >h1, >h2{
            text-align: center;
        }
        >h1{
            margin-bottom: 60px;
        }
    }
}
.myButton{
    color: white;
    background-color: $green-water;
}

</style>
