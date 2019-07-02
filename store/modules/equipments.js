const state = {
  items: []
};

// getters
const getters = {
  equipment: state => state.items,
  generators: state => filter(state.items, "type", "generator"),
  motorpumps: state => filter(state.items, "type", "motorpump"),
  trailers: state => filter(state.items, "type", "trailer")
};

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

export default {
  state,
  getters
};
