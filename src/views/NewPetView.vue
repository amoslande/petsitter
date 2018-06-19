<template>
  <div>
    <h2 class="new-pet-view-title">New Pet</h2>
    <form class="new-pet-view-form">
      <div class="form-group">
        <label for="petName">Name</label>
        <input class="form-control"
               id="petName"
               placeholder="Enter pet name"
               v-model="pet.name"/>
      </div>
      <div class="form-group">
        <label for="petType">Type</label>
        <select class="form-control" id="petType" v-model="pet.type">
          <option v-for="petType in PET_TYPES"
                  :key="petType.name"
                  :value="petType">
            {{ petType.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="petImg">Image URL</label>
        <input class="form-control"
               id="petImg"
               type="url"
               placeholder="Enter pet image URL"
               v-model="pet.image"/>
      </div>
      <div class="form-group">
        <label for="petHungerRate">Hunger rate</label>
        <input class="form-control"
               id="petHungerRate"
               type="number"
               min="1"
               max="100"
               v-model="pet.hungerRate"/>
      </div>
      <div class="form-group">
        <label for="allowedFoodTypes">Allowed food types</label>
        <select class="form-control" id="allowedFoodTypes" v-model="pet.allowedFoodTypes" multiple>
          <option v-for="foodType in FOOD_TYPES"
                  :key="foodType.name"
                  :value="foodType">
            {{ foodType.name }}
          </option>
        </select>
      </div>
      <button type="button" class="btn btn-primary" @click="add" :disabled="!valid">Add</button>
      <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line
import { FOOD_TYPES, PetsStore, PET_TYPES } from '@/stores/PetsStore.js';

export default {
  name: 'NewPetView',
  data() {
    return {
      FOOD_TYPES,
      pet: {
        allowedFoodTypes: [],
        hungerRate: 1,
        image: '',
        name: '',
        status: 100,
        type: Object.values(PET_TYPES)[0],
      },
      PetsStore,
      PET_TYPES,
    };
  },
  computed: {
    valid() {
      return this.pet.name.length > 2 &&
        this.pet.image.length > 5 &&
        this.pet.hungerRate > 0 && this.pet.hungerRate <= 100 &&
        this.pet.allowedFoodTypes.length > 0;
    },
  },
  methods: {
    cancel() {
      this.$router.push('/');
    },
    add() {
      this.PetsStore.methods.addPet(PetsStore, this.pet);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
  .new-pet-view-title {
    padding: 20px 10px;
    text-align: center;
  }
  .new-pet-view-form {
    margin: 40px auto;
    width: 550px;
  }
</style>
