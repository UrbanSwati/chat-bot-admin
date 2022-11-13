<template>
  <div class="card" style="margin-bottom: 1em">
    <!-- <div class="card-header">Hello</div> -->
    <div class="card-body">
      <p style="color: black">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>

<style scoped>
.card:hover {
  /* background-color: #94acf3; */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
