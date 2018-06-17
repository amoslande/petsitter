<template>
  <div>
    <h2 class="pets-view-title">New Pet</h2>
    <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
  </div>
</template>

<script>
import { PetsStore } from '@/stores/PetsStore.js';

export default {
  name: 'ManagePetsView',
  data() {
    return {

    };
  },
  methods: {
    cancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.pets-view-title {
  padding: 20px 10px;
  text-align: center;
}
</style>
