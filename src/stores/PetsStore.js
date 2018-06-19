const HUNGER_INTERVAL = 2000;

const FOOD_TYPES = {
  BONE: { name: 'Bone', value: 40 },
  BREAD: { name: 'Bread', value: 5 },
  CARROT: { name: 'Carrot', value: 5 },
  PASTA: { name: 'Pasta', value: 5 },
  STAKE: { name: 'Stake', value: 90 },
};

const PET_TYPES = {
  CAT: { name: 'Cat' },
  DOG: { name: 'Dog' },
  FISH: { name: 'Fish' },
  RABBIT: { name: 'Rabbit' },
};

const PetsStore = {
  data: {
    pets: [
      {
        allowedFoodTypes: [
          FOOD_TYPES.BONE,
          FOOD_TYPES.BREAD,
          FOOD_TYPES.CARROT,
          FOOD_TYPES.PASTA,
          FOOD_TYPES.STAKE,
        ],
        hungerRate: 10,
        image: 'https://loremflickr.com/60/60/pet?1',
        name: 'nameA',
        status: 100,
        type: PET_TYPES.DOG,
      },
      {
        allowedFoodTypes: [
          FOOD_TYPES.BONE,
          FOOD_TYPES.BREAD,
          FOOD_TYPES.CARROT,
          FOOD_TYPES.PASTA,
          FOOD_TYPES.STAKE,
        ],
        hungerRate: 10,
        image: 'https://loremflickr.com/60/60/pet?2',
        name: 'nameB',
        status: 100,
        type: PET_TYPES.DOG,
      },
      {
        allowedFoodTypes: [FOOD_TYPES.BREAD, FOOD_TYPES.PASTA],
        hungerRate: 5,
        image: 'https://loremflickr.com/60/60/pet?3',
        name: 'nameC',
        status: 100,
        type: PET_TYPES.CAT,
      },
      {
        allowedFoodTypes: [FOOD_TYPES.BREAD, FOOD_TYPES.PASTA],
        hungerRate: 5,
        image: 'https://loremflickr.com/60/60/pet?4',
        name: 'nameD',
        status: 100,
        type: PET_TYPES.CAT,
      },
    ],
  },
  methods: {
    addPet(petStore, pet) {
      petStore.data.pets.push(pet);
    },
    feedPet(pet, foodType) {
      let { status } = pet;
      if (status === 0) return;

      if (pet.allowedFoodTypes.includes(foodType)) {
        status += foodType.value;
        status = status > 100 ? 100 : status;
      } else {
        status = 0;
      }
      Object.assign(pet, { status });
    },
    hungerTick() {
      this.data.pets.forEach((pet) => {
        let { status } = pet;
        status -= pet.hungerRate;
        status = status < 0 ? 0 : status;
        Object.assign(pet, { status });
      });
    },
  },
};

export {
  FOOD_TYPES,
  HUNGER_INTERVAL,
  PetsStore,
  PET_TYPES,
};
