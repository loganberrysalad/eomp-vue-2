<template>
    <footer class="container-fluid"> 
    <!-- <i>desginged and code by Logan Thomas</i> put this in smaller text -->
    <div class="row">
       <p> COPYRIGHT &COPY; {{ Year }}</p> 
    </div>

    </footer>
</template>

<script>
  

    export default {
        data(){
            return{
                Year: new Date().getUTCFullYear()
            }
        }
       }

</script>

<style scoped>
.row{
    text-align: center;

}
footer{
    font-size: 20px;

    background-color: rgb(82, 82, 86);
    color: white;

}


</style>