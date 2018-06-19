const HUNGER_INTERVAL = 2000;

const FOOD_TYPES = {
  BONE: { name: 'Bone', value: 40 },
  BREAD: { name: 'Bread', value: 5 },
  CARROT: { name: 'Carrot', value: 5 },
  PASTA: { name: 'Pasta', value: 5 },
  STAKE: { name: 'Stake', value: 90 },
};

const PET_TYPES = {
  CAT: { name: 'cat', allowedFoodTypes: [FOOD_TYPES.BREAD, FOOD_TYPES.PASTA] },
  DOG: {
    name: 'dog',
    allowedFoodTypes: [
      FOOD_TYPES.BONE,
      FOOD_TYPES.BREAD,
      FOOD_TYPES.CARROT,
      FOOD_TYPES.PASTA,
      FOOD_TYPES.STAKE,
    ],
  },
  FISH: { name: 'fish', allowedFoodTypes: [FOOD_TYPES.BREAD] },
  RABBIT: {
    name: 'rabbit',
    allowedFoodTypes: [
      FOOD_TYPES.BREAD,
      FOOD_TYPES.CARROT,
      FOOD_TYPES.PASTA,
    ],
  },
};

const PetsStore = {
  data: {
    pets: [
      {
        hungerRate: 10,
        image: 'https://loremflickr.com/60/60/pet?1',
        name: 'nameA',
        status: 100,
        type: PET_TYPES.DOG,
      },
      {
        hungerRate: 10,
        image: 'https://loremflickr.com/60/60/pet?2',
        name: 'nameB',
        status: 100,
        type: PET_TYPES.DOG,
      },
      {
        hungerRate: 5,
        image: 'https://loremflickr.com/60/60/pet?3',
        name: 'nameC',
        status: 100,
        type: PET_TYPES.CAT,
      },
      {
        hungerRate: 5,
        image: 'https://loremflickr.com/60/60/pet?4',
        name: 'nameD',
        status: 100,
        type: PET_TYPES.CAT,
      },
    ],
  },
  methods: {
    addPet(pet) {

    },
    feedPet(pet, foodType) {
      let { status } = pet;
      if (pet.type.allowedFoodTypes.includes(foodType)) {
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
};
