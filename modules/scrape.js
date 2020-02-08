import fs from 'fs-extra'
import moment from 'moment-mini'
import { createClient } from '../plugins/contentful'
import ctfConfig from '../lib/config'

export default function scraper() {
  const writeData = async (path, content) => {
    await fs.ensureFile(path)
    await fs.writeJson(path, content)
  }

  this.nuxt.hook('build:before', async (generator) => {
    await fs.emptyDir('static/data')

    const scraper = []
    const entries = await createClient(ctfConfig).getEntries({
      content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
    })

    const posts = []
    entries.items.forEach((entry, i) => {
      scraper.push(
        writeData(
          `static/data/blog/entry/${entry.fields.slug}.json`,
          entry.fields
        )
      )

      const pageLimit = 52
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
      scraper.push(writeData(`static/data/blog/${id}.json`, posts))
    })

    const assets = await createClient().getEntry(
      process.env.CTF_ASSETS_ENTRY_ID
    )

    assets.fields.assets.forEach((asset) => {
      scraper.push(
        writeData(
          `static/data/assets/${asset.fields.title}.json`,
          asset.fields.file.url
        )
      )
    })

    return Promise.all(scraper)
  })
}
