import variables from '../lib/variables'

export default {
  loadCurrentPosts: (state) => (id) => {
    const pageLimit = variables.LIMIT_OF_SINGLE_PAGE
    return state.posts.filter((post, i) => {
      return i >= pageLimit * (id - 1) && i < pageLimit * id
    })
  }
}
