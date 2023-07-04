<template>
  <navBar/>
  <router-view/>
  <footerComp/>
</template>
<script>
import navBar from '@/components/navBar.vue';
import footerComp from './components/footerComp.vue';
export default {
  components: {
    navBar,
    footerComp,
  }
}


</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Orphenus';

  
}
#app{
  display: grid;
  grid-template-rows: auto minmax(82.7vh, 1fr) auto;
  grid-template-columns: repeat(3,1fr);
}
#app>*{
  grid-column: -1/1;


}


 
</style>
