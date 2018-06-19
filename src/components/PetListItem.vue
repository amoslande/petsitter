<template>
  <tr class="pets-view-table-item" @click="selectHandler(pet)">
    <th scope="row" class="pets-view-table-item-img">
      <img :src="pet.image"/>
    </th>
    <td class="pets-view-table-item-text">
      {{ pet.name }}
    </td>
    <td class="pets-view-table-item-text">
      {{ petStatus }}
    </td>
    <td class="pets-view-table-item-text">
      <div class="progress" v-show="isSelected">
        <div class="progress-bar" role="progressbar" :style="{width: pet.status + '%'}"
             :aria-valuenow="pet.status" aria-valuemin="0" aria-valuemax="100">
          {{ pet.status }}%
        </div>
      </div>
    </td>
    <td class="pets-view-table-item-img">
      <img v-show="isSelected" :src="require('@/assets/' + pet.type.name + '.svg')"/>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'PetListItem',
  props: {
    pet: Object,
    selectedPet: Object,
    selectHandler: Function,
  },
  computed: {
    isSelected() {
      return this.pet === this.selectedPet;
    },
    petStatus() {
      const { status } = this.pet;
      if (status > 50) {
        return 'Full';
      } else if (status > 25) {
        return 'Hungry';
      } else if (status > 0) {
        return 'Starving';
      }

      return 'Dead';
    },
  },
};
</script>

<style scoped>
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
