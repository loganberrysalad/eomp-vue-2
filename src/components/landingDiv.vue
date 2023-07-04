<template>
   
    <h1>I'M LOGAN THOMAS WELCOME TO MY PORTFOLIO</h1>
<div class="wholeThing">


    <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.postimg.cc/Fs7QznXb/stick-man.png" class="img-fluid rounded-start" alt="...">
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">ABOUT ME </h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, vero excepturi laborum non modi rem labore id reiciendis ab, quasi qui doloremque delectus repellendus. Provident eum iste a excepturi earum?....</p>
            </div>
            <button>
              <router-link class="links" to="/about">Read more..</router-link>
            </button>
           
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    text-align: center;
}
.links{
    text-decoration: none;
    padding: 2rem;
   
}
.card-text{
    font-size: 20px;
}

.wholeThing{
    width: 600px;
    margin: auto;
    height: 86vh;

    
}

</style>
<!-- checkout pop overs in bs -->