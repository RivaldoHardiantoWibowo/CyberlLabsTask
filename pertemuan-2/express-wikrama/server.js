const express = require('express')
const app = express()

const port = 5000

app.get('/',(req, res) => {
    res.write('coba express')
    res.end()
})

app.get('/wikrama', (req, res) => {
    res.write('hello wikrama')
    res.end()
})
app.get('/about', (req, res) => {
    res.write('About')
    res.end()
})

app.listen(port, () => {
    console.log(`server berjalan di http:/localhost:${port}`);
})