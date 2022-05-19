<template>
<main>
    <section id="buildDreamSec">
        <h2>start learning coding languages</h2>
        <h1>build your dream today</h1>
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
    >h1{
        text-align: center;
    }
}
.myButton{
    color: white;
    background-color: $green-water;
}

</style>
