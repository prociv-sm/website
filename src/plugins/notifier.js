export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage ({ content = '', type = '' }) {
      store.commit('snackbar/showMessage', { content, type })
    }
  })
}
