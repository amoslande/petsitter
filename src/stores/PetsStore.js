const HUNGER_INTERVAL = 2000;

const PET_TYPES = {
  CAT: 'cat',
  DOG: 'dog',
  FISH: 'fish',
  RABBIT: 'rabbit',
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
  HUNGER_INTERVAL,
  PetsStore,
};
