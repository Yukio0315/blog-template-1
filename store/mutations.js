export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  toggleMenu(state) {
    state.displayMenu = !state.displayMenu
  }
}
