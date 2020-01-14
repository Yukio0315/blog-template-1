const contentful = require('contentful')
require('dotenv').config()

const defaultConfig = {
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  CTF_SPACE_ID: process.env.CTF_SPACE_ID
}

export function createClient(config = defaultConfig) {
  return contentful.createClient({
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
    space: config.CTF_SPACE_ID
  })
}

// TODO: delete export
export default ''
