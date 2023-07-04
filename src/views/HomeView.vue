<template>
  <div >
    <landingPage/>
    <landingDiv/>
    <contactComp/>
    <textAnimation/>
    <slideAnimation/>
    <CaroucelComp/>

  </div>
</template>



<script>
import landingPage from '../components/landingPage.vue';
import landingDiv from '@/components/landingDiv.vue';
import contactComp from '../components/contactComp.vue';
import textAnimation from '@/components/textAnimation'
import slideAnimation from '@/components/slideAnimation'
import CaroucelComp from '@/components/CaroucelComp.vue';


export default{
  components:{
    landingPage,
    landingDiv,
    contactComp,
    textAnimation,
    slideAnimation,
    CaroucelComp
  },

    }
    </script>

<style>

</style>