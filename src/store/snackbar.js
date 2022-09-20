export const state = () => ({
  content: '',
  type: ''
})

export const mutations = {
  showMessage (state, payload) {
    state.content = payload.content
    state.type = payload.type
  }
}
