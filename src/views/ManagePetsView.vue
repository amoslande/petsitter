<template>
  <div>
    <h2 class="pets-view-title">Manage Pets</h2>
    <button type="button"
            class="btn btn-primary pets-view-new-button"
            @click="newPet">
      + New pet...
    </button>
    <div class="pets-view-table table-responsive-md">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr class="pets-view-table-item"
            v-for="pet in PetsStore.pets"
            :key="pet.name"
            @click="selectPet(pet)">
          <th scope="row" class="pets-view-table-item-img">
            <img :src="pet.image"/>
          </th>
          <td class="pets-view-table-item-text">
            {{ pet.name }}
          </td>
          <td class="pets-view-table-item-img">
            <img :src="require('@/assets/' + pet.type + '.svg')"/>
          </td>
          <td class="pets-view-table-item-text">
            <div class="progress" v-show="pet === selectedPet">
              <div class="progress-bar" role="progressbar" :style="{width: pet.status + '%'}"
                   :aria-valuenow="pet.status" aria-valuemin="0" aria-valuemax="100">
                {{ pet.status }}%
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { PetsStore } from '@/stores/PetsStore.js';

export default {
  name: 'ManagePetsView',
  data() {
    return {
      PetsStore: PetsStore.data,
      selectedPet: null,
    };
  },
  methods: {
    newPet() {
      this.$router.push('/new');
    },
    selectPet(pet) {
      this.$set(this, 'selectedPet', pet);
    },
  },
};
</script>

<style scoped>
.pets-view-title {
  padding: 20px 10px;
  text-align: center;
}
.pets-view-new-button {
  margin: 40px;
}
.pets-view-table {
  margin: 0 auto;
  width: 700px;
}
.pets-view-table-item {
  cursor: pointer;
}
.pets-view-table-item:hover {
  background: rgba(0, 0, 0, 0.5);
}
.pets-view-table-item-img {
  width: 60px;
}
.pets-view-table-item-img > img {
  height: 60px;
}
.pets-view-table-item-text {
  vertical-align: middle;
}
</style>
