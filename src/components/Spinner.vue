<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  border: none;
  border-bottom: 5px solid #ff00ee;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
