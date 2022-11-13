<template>
  <div class="card" style="margin-bottom: 1em">
    <!-- <div class="card-header">Hello</div> -->
    <div class="card-body">
      <b class="card-title" style="color: #454545">
        {{ intent.name.toUpperCase() }}</b
      >
      <p class="card-text" style="color: gray">{{ intent.description }}</p>
      <a
        v-if="intent.id !== 'FALLBCKINT'"
        @click.stop="$emit('onDelete', intent)"
        class="btn btn-danger"
        ><i class="fas fa-solid fa-trash"></i
      ></a>
      <a href="#" style="margin-left: 10px" class="btn btn-primary"
        ><i class="fas fa-solid fa-pen"></i
      ></a>
    </div>
  </div>
</template>

<script setup>
defineProps(["intent"]);
</script>

<style scoped>
.card:hover {
  /* background-color: #94acf3; */
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
