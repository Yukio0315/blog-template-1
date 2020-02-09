import moment from 'moment-mini'
import ctfConfig from '~/lib/config'
import { createClient } from '~/plugins/contentful'

export default {
  async nuxtServerInit({ commit }) {
    await createClient()
      .getEntries({
        content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
      .then((entries) => {
        const result = entries.items.map((entry) => {
          return {
            id: entry.sys.id,
            title: entry.fields.title,
            image: entry.fields.heroImage.fields.file.url,
            overview: entry.fields.overview,
            tags: entry.fields.tags,
            date: moment(entry.fields.publishDate).format('YYYY-MM-DD'),
            slug: entry.fields.slug
          }
        })
        commit('setPosts', result)
      })
  },
  toggleMenu({ commit }) {
    commit('toggleMenu')
  },
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
