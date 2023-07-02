import { visit } from 'unist-util-visit'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', (file) => {
      if (file._id.endsWith('.md')) {
        file.body = file.body.replace(/--[ ,]/g, '— ')
      }
    })

    nitroApp.hooks.hook('content:file:afterParse', (file) => {
      if (file._id.endsWith('.md')) {
        visit(file.body, (n:any) => n.tag === 'p', (node) => {
          const re = /^— .+/s
          if(re.test(node.children[0].value)) {
            node.props.class = ['dialog']
          }
        })
      }
    })
  })