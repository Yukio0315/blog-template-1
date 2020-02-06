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
            date: moment(entry.fields.publishDate).format('2013-02-08'),
            slug: entry.fields.slug
          }
        })
        commit('setPosts', result)
      })
  },
  toggleMenu({ commit }) {
    commit('toggleMenu')
  },
  async fetchKeyMovie({ commit }) {
    await createClient()
      .getAsset(process.env.CTF_KEY_VISUAL_ASSET_ID)
      .then((asset) => {
        commit('setKeyMovie', asset.fields.file.url)
      })
  }
}
