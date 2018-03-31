const express = require('express')
const compression = require('compression')
const logger = require('morgan')

const app = express()
app.disable('x-powered-by')
app.use(compression())
app.use(logger('combined'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
const isProd = process.env.NODE_ENV === 'production'

app.use(
  '/static',
  express.static(`${__dirname}/static`, {
    maxAge: isProd ? 60 * 60 * 24 * 365 : 0 // 1 year
  })
)

const indexCssFile = isProd ? '/static/css/app.min.css' : '/static/css/app.css'

app.get('/', (req, res) => {
  res.render('index')
})
//app.use('/sitemap.xml', sitemapRouter)
//app.use('/robots.txt', robotsRouter)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
