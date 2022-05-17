<template>
<main>
    <section id="buildDreamSec">
        <h2>start learning coding languages</h2>
        <h1>build your dream today</h1>
        <build-cards/>
        <construct-box/>
        <featured-cards/>
    </section>
</main>
</template>


<script>
import buildCards from './buildCards.vue';
import constructBox from './constructBox.vue';
import featuredCards from './featuredCards.vue';

export default{
    name: 'AppMain',
    components:{
        buildCards,
        constructBox,
        featuredCards
    },
    data(){},
}

</script>

<style scoped lang="scss">
#buildDreamSec{
    >h1{
        text-align: center;
    }
}

</style>
