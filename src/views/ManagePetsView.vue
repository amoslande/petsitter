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
            <th scope="col">Status</th>
            <th scope="col"><span v-show="selectedPet">Hunger</span></th>
            <th scope="col"><span v-show="selectedPet">Type</span></th>
          </tr>
        </thead>
        <tbody>
          <pet-list-item v-for="pet in PetsStore.pets" :selectHandler="selectPet"
              :pet="pet" :key="pet.name" :selectedPet="selectedPet">
          </pet-list-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { PetsStore } from '@/stores/PetsStore.js';
import PetListItem from '../components/PetListItem';

export default {
  name: 'ManagePetsView',
  components: { PetListItem },
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
</style>
