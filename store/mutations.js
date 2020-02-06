export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  setKeyMovie(state, keyMovie) {
    state.keyMovie = keyMovie
  },
  showHeader(state) {
    state.headerLoaded = true
  },
  toggleMenu(state) {
    state.displayMenu = !state.displayMenu
  },
  seenTopAnime(state, payload) {
    state.seenTopAnime[payload] = true
  }
}
