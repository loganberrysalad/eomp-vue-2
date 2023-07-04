<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>

            <div class="carousel-inner">
              
                <div class="carousel-item active">
                <img src="https://i.postimg.cc/63T6rcCY/Screenshot-2023-07-01-141240.png"  >
                <div class="carousel-caption d-none d-md-block">
                  <h5>Calculator</h5>
                  <p>My first JS project</p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"   alt="https://i.postimg.cc/sfLgCSsg/LT-logo.png" >
                <div class="carousel-caption d-none d-md-block">
                  <h5>Bootstrap Portoflio</h5>
                  <p>HTML, CSS and bootstrap Portoflio </p>
                </div>
              </div>

              <div class="carousel-item">
                <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"  alt="https://i.postimg.cc/sfLgCSsg/LT-logo.png" >
                <div class="carousel-caption d-none d-md-block">
                  <h5>Tempreture converter</h5>
                  <p>Converting Celeuis to ferenhiet with JavaScript</p>
                </div>
              </div>

              <div class="carousel-item">
                  <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"   alt="https://i.postimg.cc/sfLgCSsg/LT-logo.png" >
                  <div class="carousel-caption d-none d-md-block">
                      <h5>Tech 4 less</h5>
                      <p>My eCommerces store with the CRUD</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"   alt="https://i.postimg.cc/sfLgCSsg/LT-logo.png" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>BMI Calculator</h5>
                    <p>accurate BMI calculator</p>
                </div>
            </div>
            
            
            <div class="carousel-item">
                <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png"   alt="https://i.postimg.cc/sfLgCSsg/LT-logo.png" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>6th rtrrrrlabel</h5>
                    <p>Some representative placeholder Lorem ipsllendus doloribus! Quam sit explicabo amet. Veniam, earum! content for the second slide.</p>
                </div>
            </div>
        </div>
    </div>
            
            <button id="back" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button id="forward" class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
       

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    width: 35rem;
}
#back, #forward{
    background: rgb(116, 116, 108);
}
p{
    color: chartreuse;
}
</style>

<!-- make the btns smaller and give margin on top 
2. sort out media queryes coz its not responsive-->