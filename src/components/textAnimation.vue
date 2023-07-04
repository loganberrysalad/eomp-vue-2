<template>
    <h1 class="typewriter"></h1>
</template>
<style>
/* Define the animation */
@keyframes typing {
  0% { width: 0; }
  100% { width: 100%; }
}

/* Apply the animation to the text */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(20, end);
}
</style>