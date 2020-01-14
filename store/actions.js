import ctfConfig from '~/lib/config'
import { createClient } from '~/plugins/contentful'

export default {
  async fetchPosts({ commit }, context) {
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
            image: entry.fields.heroImage,
            tags: entry.fields.tags,
            date: entry.fields.publishDate,
            slug: entry.fields.slug
          }
        })
        commit('setPosts', result)
      })
    // .catch((e) => context.error(e))
  },
  toggleMenu({ commit }) {
    commit('toggleMenu')
  }
}
