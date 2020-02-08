import moment from 'moment-mini'
import { createClient } from '../plugins/contentful'
import ctfConfig from '../lib/config'

export default function generateModule(moduleOptions) {
  this.nuxt.hook('generate:before', async (generator) => {
    const entries = await createClient(ctfConfig).getEntries({
      content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
    })

    const pageLimit = 52
    const pageNum = Math.floor(entries.items.length / pageLimit) + 1

    this.options.build.plugins.push({
      apply(compiler) {
        compiler.plugin('emit', (compilation, cb) => {
          entries.items.forEach((entry) => {
            compilation.assets[`blog/entry/${entry.fields.slug}.json`] = {
              source: () => JSON.stringify(entry.fields),
              size: () => {}
            }
          })
          const posts = []
          entries.items.reverse().forEach((entry, i) => {
            const id = Math.floor(i / pageLimit) + 1
            posts.push({
              id: entry.sys.id,
              title: entry.fields.title,
              image: entry.fields.heroImage.fields.file.url,
              overview: entry.fields.overview,
              tags: entry.fields.tags,
              date: moment(entry.fields.publishDate).format('2013-02-08'),
              slug: entry.fields.slug
            })
            compilation.assets[`blog/${id}.json`] = {
              source: () => JSON.stringify(posts),
              size: () => {}
            }
          })
          cb()
        })
      }
    })

    if (this.options.dev) return

    this.options.generate.routes = entries.items.map(
      (entry) => `/blog/entry/${entry.fields.slug}`
    )
    for (let i = 1; i <= pageNum; i++) {
      this.options.generate.routes.push(`/blog/${i}`)
    }
  })
}
