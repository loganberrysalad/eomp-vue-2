<template>
    <div class="cardAmintion"></div>


</template>
<style>
/* Define the animation */
@keyframes slideOut {
  0% { 
    transform: translateX(-100%); opacity: 0.40;
 }
 50%{
    transform: rotate(35deg);
 }
 80%{
    opacity: 0.20;
    transform: rotate(-35deg);
 }

  100% { transform: translateX(0%); opacity: 1; }
}

/* Apply the animation to the cards */
.card {

  background-color: #f1f1f1;
  animation: slideOut 3s ease-in-out forwards;
}
</style>