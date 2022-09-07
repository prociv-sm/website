const state = {
  items: [
    {
      title: "Mitsubishi",
      model: "L200",
      bodyType: "car",
      keyInformation: {
        year: "2000",
        bodyType: "car",
        mileage: "118,590 Km",
        transmission: "Manual",
        fuelType: "Diesel",
        euro: "Euro 2"
      },
      performance: {
        enginePower: "113 hp",
        engineSize: "2477 cc"
      },
      vehicleDescription: {
        seats: 5,
        colour: "white",
        fuelCapacity: "75 litres"
      },
      image: "mitsu/mitsubishi3.jpg"
    },
    {
      title: "Land Rover",
      model: "Defender",
      bodyType: "car",
      keyInformation: {
        year: "2000",
        bodyType: "car",
        mileage: "118,590 Km",
        transmission: "Manual",
        fuelType: "Diesel",
        euro: "Euro 2"
      },
      performance: {
        enginePower: "113 hp",
        engineSize: "2477 cc"
      },
      vehicleDescription: {
        seats: 5,
        colour: "white",
        fuelCapacity: "75 litres"
      },
      image: "land/land2.jpg"
    },
    {
      title: "Iveco",
      bodyType: "truck",
      model: "Daily 4x4",
      image: "iveco/iveco2.jpg"
    },
    {
      title: "Fiat",
      model: "Ducato",
      bodyType: "truck",
      image: "ducato/ducato.jpg"
    }
  ]
};

// getters
const getters = {
  truck: state => filter(state.items, "bodyType", "truck"),
  car: state => filter(state.items, "bodyType", "car"),
  trailer: state => filter(state.items, "bodyType", "trailer"),
  all: state => state.items
};

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

export default {
  state,
  getters
};
