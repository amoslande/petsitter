<template>
  <div>
    <h2 class="pets-view-title">Manage Pets</h2>
    <div class="table-responsive-md">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Hunger Status</th>
        </tr>
        </thead>
        <tbody>
        <tr class="pets-view-list-item" v-for="pet in pets" :key="pet.name">
          <th scope="row" class="pets-view-list-item-img">
            <img :src="pet.image" />
          </th>
          <td class="pets-view-list-item-name">
            {{ pet.name }}
          </td>
          <td class="pets-view-list-item-status">
            <div class="progress">
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
export default {
  name: 'ManagePetsView',
  data() {
    return {
      pets: [
        {
          name: 'nameA',
          image: 'https://loremflickr.com/60/60/pet?1',
          status: 100,
        },
        {
          name: 'nameB',
          image: 'https://loremflickr.com/60/60/pet?2',
          status: 100,
        },
        {
          name: 'nameC',
          image: 'https://loremflickr.com/60/60/pet?3',
          status: 100,
        },
      ],
    };
  },
};
</script>

<style scoped>
.pets-view-title {
  padding: 20px 10px;
  text-align: center;
}
.pets-view-list-item {
  cursor: pointer;
}
.pets-view-list-item-img {
  width: 60px;
}
.pets-view-list-item-name,
.pets-view-list-item-status {
  vertical-align: middle;
}
</style>
