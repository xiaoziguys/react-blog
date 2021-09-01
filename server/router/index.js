const fs = require('fs')

module.exports = app => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return
    const router = require(`./${file}`)
    console.log(router.routes)
    app.use(router.routes()).use(router.allowedMethods())
  })
}
