const PetsStore = {
  data: {
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
      {
        name: 'nameD',
        image: 'https://loremflickr.com/60/60/pet?4',
        status: 100,
      },
    ],
  },
  methods: {
    hungerTick() {
      this.data.pets.forEach((pet) => {
        Object.assign(pet, { status: pet.status < 1 ? 0 : pet.status - 1 });
      });
    },
  },
};

export default PetsStore;
