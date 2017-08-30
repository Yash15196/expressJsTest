let express = require('express');

let router = express.Router();

let bodyParser = require('body-parser');


router.post('/multiply/:id1/:id2', (req, res) => {

    var a =parseFloat(req.params.id1)

    var b = parseFloat(req.params.id2)

    var mul = a * b;

    res.send(mul.toString());

})



router.post('/add/:id12/:id22', (req, res) => {

    var a1 =parseFloat(req.params.id12)
	 var b2 = parseFloat(req.params.id22)
	 var sum = a1 + b2;
	res.send(sum.toString());

})

module.exports=router;

