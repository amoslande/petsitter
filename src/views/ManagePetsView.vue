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
          <pet-list-item v-for="pet in PetsStore.data.pets" :selectHandler="selectPet"
              :pet="pet" :key="pet.name" :selectedPet="selectedPet">
          </pet-list-item>
        </tbody>
      </table>
    </div>
    <div class="form-group pets-view-food-type-form-group" v-show="selectedPet">
      <label for="foodType">Food type:</label>
      <select class="form-control pets-view-food-type-select"
              id="foodType"
              v-model="selectedFoodType">
        <option v-for="foodType in FOOD_TYPES"
                :key="foodType.name"
                :value="foodType">
          {{ foodType.name }}
        </option>
      </select>
      <button type="button"
              class="btn btn-primary"
              :disabled="selectedPet && selectedPet.status === 0"
              @click="feedPet">
        Feed {{ selectedPet && selectedPet.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { FOOD_TYPES, PetsStore } from '@/stores/PetsStore.js';
import PetListItem from '../components/PetListItem';

export default {
  name: 'ManagePetsView',
  components: { PetListItem },
  data() {
    return {
      FOOD_TYPES,
      PetsStore,
      selectedFoodType: Object.values(FOOD_TYPES)[0],
      selectedPet: null,
    };
  },
  methods: {
    newPet() {
      this.$router.push('/new');
    },
    selectPet(pet) {
      this.$set(this, 'selectedPet', this.selectedPet === pet ? null : pet);
    },
    feedPet() {
      this.PetsStore.methods.feedPet(this.selectedPet, this.selectedFoodType);
    },
  },
};
</script>

<style scoped>
  .pets-view-title {
    padding: 20px 10px;
    text-align: center;
  }
  .pets-view-food-type-form-group,
  .pets-view-new-button {
    margin: 40px;
  }
  .pets-view-table {
    margin: 0 auto;
    width: 700px;
  }
  .pets-view-food-type-select {
    display: inline-block;
    margin-right: 10px;
    width: 180px;
  }
</style>
