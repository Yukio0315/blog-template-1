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
    const NumOfPosts = entries.items.length
    entries.items
      .sort((a, b) =>
        moment(b.fields.publishDate).diff(moment(a.fields.publishDate))
      )
      .forEach((entry, i) => {
        scraper.push(
          writeData(
            `static/data/blog/entry/${entry.fields.slug}.json`,
            entry.fields
          )
        )

        posts.push({
          id: entry.sys.id,
          title: entry.fields.title,
          image: entry.fields.heroImage.fields.file.url,
          overview: entry.fields.overview,
          tags: entry.fields.tags,
          date: moment(entry.fields.publishDate).format('YYYY-MM-DD'),
          slug: entry.fields.slug
        })
        if (i === NumOfPosts - 1) {
          scraper.push(writeData(`static/data/blog/posts.json`, posts))
        }
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
