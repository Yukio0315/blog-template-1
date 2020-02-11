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
  setSortOption(state, sort) {
    state.sortOption = sort
  },
  isSorted(state) {
    state.isSorted = true
  }
}
