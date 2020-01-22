export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  toggleMenu(state) {
    state.displayMenu = !state.displayMenu
  },
  seenTopAnime(state, payload) {
    state.seenTopAnime[payload] = true
  }
}
