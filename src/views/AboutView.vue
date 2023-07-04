<template>
  <div class="about">
 
    <h1>ABOUT PAGE</h1>
    <AboutComp/>
    <slideAnimation/>
  </div>
</template>
<script>
import AboutComp from '@/components/AboutComp.vue';
import slideAnimation from '@/components/slideAnimation.vue';

export default{
  components:{
    AboutComp,
    slideAnimation
    
  }
}
</script>
<style>
.about{

 background-image: url('https://i.postimg.cc/BQ1cPMfy/Untitled-design.png');
 background-repeat: no-repeat;
 background-size: cover;
}

</style>
