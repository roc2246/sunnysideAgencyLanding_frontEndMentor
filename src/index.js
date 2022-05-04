const path = require('path')
const express = require('express')
const { request } = require('express')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Agency Landing Page',
        name: 'Riley Childs'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})