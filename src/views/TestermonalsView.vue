<template>
    <div>
        <h1>TESTIMONIAL</h1>
      <div class="container">
        <div class="row">
            <div class="card" v-for="info in testermonals" :key="info.id" style="width: 18rem;">
  <img src="" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{info.name}}</h5>
    <p class="card-text">{{info.msg}}</p>
  </div>
</div>
</div>
</div>
    </div>


</template>

<script>
    export default {
        computed:{
            testermonals(){
                return this.$store.state.testermonals
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestermonals')
        }
        
    }
</script>

<style scoped>
.container{
    background: #8a2c2c;
}


</style>