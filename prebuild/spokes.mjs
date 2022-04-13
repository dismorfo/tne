import axios from 'axios'
import fs from 'fs'

const endpoint = 'http://192.168.0.5:8080/tne'
const contentDir = '/Users/ortiz/tools/hugo-example/content'
const spokeUrl = `${endpoint}/api/v1/spoke`
const hubsUrl = `${endpoint}/api/v1/hub`

try {
  console.log(`Download Spokes frontmatter: ${spokeUrl}`)
  const spokes = await axios.get(spokeUrl)
  for await (let doc of spokes.data.response) {
    const spoke = await axios.get(`${endpoint}/api/mark-down/spokes/${doc.nid}`)
    console.log(`Saved: ${contentDir}/${doc.path}/index.md`)
    fs.writeFileSync(`${contentDir}/${doc.path}.md`, spoke.data)
  }
} catch (error) {
  console.log(error.code, error.config.url)
}

try {
  console.log(`Download Hubs frontmatter: ${hubsUrl}`)
  const hubs = await axios.get(hubsUrl)
  for await (let doc of hubs.data.response.docs) {
    const dirpath = `${contentDir}/${doc.path}`
    if (!fs.existsSync(dirpath)) {
      fs.mkdirSync(dirpath)
    }
    const hub = await axios.get(`${doc.url}/markdown`)
    console.log(`Saved: ${contentDir}/${doc.path}/index.md`)
    fs.writeFileSync(`${contentDir}/${doc.path}/index.md`, hub.data)
  }
} catch (error) {
  console.log(error)
}
