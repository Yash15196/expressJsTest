/*let add=require("../user");*/
let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
/*let db = ('mongodb://localhost/firstapp')*/
/*mongoose.connect(db);*/

mongoose.connect('mongodb://localhost/firstapp')

const user = require('../models/user')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/',(req, res)=> {
    user.find((err, emp) => {
            if (err)
                res.send("error")
            else
                res.json(emp)
        })})


router.post('/', (req, res) => {
   var databook = new user();
   databook.name = req.body.name

  databook.save((err, book) => {
       if (err) {
           res.send('fail to add');
       } else {
           res.json(book)
       }
   })
})



router.put('/update/:id', (req, res) => {
    user.update({
        _id: req.params.id

    }, { $set: { title: req.body.title } },  (err, newBook) => {
        if (err)
            res.send("error in updating")
        else {
            res.send(newBook)
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    user.remove({
        _id: req.params.id
    }, (err, book) => {
        if (err) res.send('error deleting')
        else {
            res.json(book)
        }
    })
})

module.exports = router;