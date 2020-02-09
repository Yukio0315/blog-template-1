export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  toggleLoading(state) {
    state.loadCompleted = !state.loadCompleted
  },
  toggleMenu(state) {
    state.displayMenu = !state.displayMenu
  },
  seenTopAnime(state, payload) {
    state.seenTopAnime[payload] = true
  },
  setSortState(state, sort) {
    state.sort = sort
  }
}
