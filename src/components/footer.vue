<template>
<footer class="widthContainer">
    <div>
        <div id="footerLeft">
            <ul class="ULlist">
                <li>Address</li>
                <li v-for="element in datiMiei.footer.address" :key="element">
                    {{element}}
                </li>
                <li style="margin-top: 30px"> 
                    <ul id="socials">
                        <li><i class="fa-brands fa-facebook-square"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="footerRight">
            <ul>
                <li v-for="element in datiMiei.footer.links" :key="element">
                    <ul  class="ULlist">
                        <li v-for="element2 in element" :key="element2">
                        {{element2}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <h2><i class="fa-solid fa-copyright"></i> 2020 Maxcoach. All Rights Reserved</h2>


</footer>
</template>


<script>



import dati from '../dati.json'

export default {
    name: 'AppFooter',
    methods:{},
    data(){
    return{
      datiMiei: dati
    }
  }
}

</script>

<style scoped lang="scss">
@import "../styles/general.scss";
ol, ul{
    padding: 0;
}

.ULlist li:first-child:not(#socials li){
    color: black !important;
    font-weight: bold;
    font-size: 1.3rem;
}
.widthContainer>div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#footerRight>ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 80px;
}
li{
    padding: 5px;
    color: rgb(78, 78, 78) !important;
}
#socials{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
footer>h2{
    text-align: center;
    font-size: 14px;
    color: rgb(117, 117, 117);
    padding: 45px;
    }



</style>
