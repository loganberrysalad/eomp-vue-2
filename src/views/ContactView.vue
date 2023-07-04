<template>
    <div>
        <h1>CONNECT WITH MEs </h1>
    <bgComp/>

    <contactComp/>
    </div>
</template>

<script>
import contactComp from '@/components/contactComp.vue';
import bgComp from '@/components/bgComp.vue';
    export default {
        contactComp,
        bgComp
        
    }
</script>

<style scoped>
h1{
    text-align: center;
  }

</style>