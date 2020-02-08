export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  setKeyMovie(state, keyMovie) {
    state.keyMovie = keyMovie
  },
  toggleLoading(state) {
    state.loadCompleted = !state.loadCompleted
  },
  toggleMenu(state) {
    state.displayMenu = !state.displayMenu
  },
  seenTopAnime(state, payload) {
    state.seenTopAnime[payload] = true
  }
}
