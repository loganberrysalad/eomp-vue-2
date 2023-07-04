<template>
    <div class="carousel">
    <div class="slides">
      <div class="slide">
        <img src="https://i.postimg.cc/wvbzF5xQ/curve-monitor.jpg" alt="Image 1">
      </div>
      <div class="slide">
        <img src="https://i.postimg.cc/T1L6sypM/headset.jpg" alt="Image 2">
      </div>
      <div class="slide">
        <img src="image3.jpg" alt="Image 3">
      </div>
      <div class="slide">
        <img src="image4.jpg" alt="Image 4">
      </div>
      <div class="slide">
        <img src="image5.jpg" alt="Image 5">
      </div>
      <div class="slide">
        <img src="image6.jpg" alt="Image 6">
      </div>
    </div>
  </div>


</template>

<style>
/* Carousel container */
.carousel {
  width: 600px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

/* Carousel slide animation */
@keyframes slide {
  0% { left: 0; }

  25% { left: -1200px; }
  45% { left: -1200px; }
  50% { left: -1800px; }
  70% { left: -1800px; }
  75% { left: -2400px; }
  95% { left: -2400px; }
  100% { left: 0; }
}

/* Carousel slide container */
.carousel .slides {
  width: 600%;
  height: 100%;
  display: flex;
  animation: slide 2s infinite;
}

/* Individual slide */
.carousel .slides .slide {
  width: 16.666%;
  height: 100%;
}

/* Slide images */
.carousel .slides .slide img {
    width: 100%;
      height: 100%;
  object-fit: cover;
}
</style>