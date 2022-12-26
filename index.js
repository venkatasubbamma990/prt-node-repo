let mongoose = require('mongoose');
let app = require('./app')
let port = 3000
mongoose.connect('mongodb://localhost/10xstudentmanagament',()=>{
    console.log('connected to db')

})
app.listen(port,()=>{
    console.log(`express server running at http://localhost:${port}`)
})

