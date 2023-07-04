<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"></a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                 <router-link class="links" to="/">Home</router-link>
                 <router-link class="links" to="/about">About</router-link>
                 <router-link class="links" to="/resume">Resume</router-link>
                 <router-link class="links" to="/projects">Projects</router-link>
                 <router-link class="links" to="/testermonals">Testermonals</router-link>
                 <router-link class="links" to="/contact">Contact</router-link>
                 
               
                </div>
              </div>
            </div>
          </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    width: 4.5rem;
    border-radius: 100%;
}
.navbar{
    background-color: rgb(64, 68, 67);
 
}
.links{
    color: white;
    text-decoration: none;
    margin:auto 9px auto 9px;
}


</style>