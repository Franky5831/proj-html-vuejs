<template>
<main>
    <section id="buildDreamSec">
        <h2>start learning coding languages</h2>
        <h1>build your dream today</h1>
        <build-cards/>
    </section>
</main>
</template>


<script>
import buildCards from './buildCards.vue'

export default{
    name: 'AppMain',
    components:{
        buildCards,
    },
    data(){},
}

</script>

<style scoped lang="scss">

</style>
