import moment from 'moment-mini'

export default {
  sortBlogByDate({ commit, state }, direction) {
    if (direction === 'Ask')
      commit(
        'setPosts',
        [...state.posts].sort((a, b) => moment(a.date).diff(moment(b.date)))
      )
    if (direction === 'Desk')
      commit(
        'setPosts',
        [...state.posts].sort((a, b) => moment(b.date).diff(moment(a.date)))
      )
  },
  sortBlogByTitle({ commit, state }, direction) {
    if (direction === 'Ask')
      commit(
        'setPosts',
        [...state.posts].sort((a, b) => {
          if (a.slug < b.slug) return -1
          if (a.slug > b.slug) return 1
        })
      )
    if (direction === 'Desk')
      commit(
        'setPosts',
        [...state.posts].sort((a, b) => {
          if (a.slug < b.slug) return 1
          if (a.slug > b.slug) return -1
        })
      )
  }
}
