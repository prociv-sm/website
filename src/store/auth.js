export const state = () => ({
  user: {
    id: null,
    name: null,
    surname: null,
    verified: false,
    email: null,
    initials: 'PC',
    roles: [],
    internal: 'user',
  },
  isLoggedIn: false,
  twoFactorAuthEnabled: false,
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },
  setTwoFactorAuth(state, payload) {
    state.twoFactorAuthEnabled = payload
  },
  setPersistence(state) {
    this.$cookies.set('isLoggedIn', state.isLoggedIn)
    this.$cookies.set('connected', state.user)
  },
  deletePersistence() {
    this.$cookies.remove('isLoggedIn')
    this.$cookies.remove('connected')
  }
}

export const getters = {
  user(state) {
    return state.user
  },
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  twoFactorAuthEnabled(state) {
    return state.twoFactorAuthEnabled
  },
}

export const actions = {
  twoFactorAuth({ commit }, payload) {
    this.$axios.$post('/api/v1/auth/two-factor/authenticate', { ...payload }).then((res) => {
      commit('setUser', res)
      commit('setLoggedIn', true)
      commit('setPersistence')
    })
  },
  getUser({ commit }) {
    this.$axios.$get('/api/v1/auth').then((res) => {
      commit('setUser', res)
      commit('setLoggedIn', true)
      commit('setPersistence')
    })
  },
  refresh({ commit }) {
    this.$axios.$get('/api/v1/auth/refresh').then((res) => {
      commit('setLoggedIn', true)
    })
  },
  logout({ commit }) {
    this.$axios.$post('/api/v1/auth/logout').then(() => {
      commit('setUser', null)
      commit('setLoggedIn', false)
      commit('deletePersistence')
    })
  },
}
