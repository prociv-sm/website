export const state = () => ({
  user: null,
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
    })
  },
  getUser({ commit }) {
    this.$axios.$get('/api/v1/auth').then((res) => {
      commit('setUser', res)
      commit('setLoggedIn', true)
    })
  },
  refresh({ commit }, payload) {
    this.$axios.$get('/api/v1/auth/refresh').then((res) => {
      commit('setUser', res)
      commit('setLoggedIn', true)
    })
  },
  logout({ commit }) {
    this.$axios.$post('/api/v1/auth/logout').then(() => {
      commit('setUser', null)
      commit('setLoggedIn', false)
    })
  },
}
