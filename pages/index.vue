<template>
  <v-btn @click="dialogVisible = true">Test</v-btn>
  <BaseProjectMemberDialog v-model="dialogVisible" />
</template>

<script setup lang="ts">

const dialogVisible = ref(false);
</script>