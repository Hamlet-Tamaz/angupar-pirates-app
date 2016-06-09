const express = require('express');
const router  = express.Router();
const knex = require('../db/knex');

router.route('/')

	.get(function(req, res) {
		// res.send('hello world');
		knex('pirates').then(function(pirates) {
			res.send(pirates);
		})
		.catch(function(err) {
		console.log(err);
		res.send(err);
	})
	})
	

	.post((req, res)=>{
	    knex('pirates').insert(req.body.pirate).returning('*').then((pirate)=>{
	      res.send(pirate);
	      console.log(pirate);
	    }).catch((err)=>{
	      res.send(err);
	    })
	  });



router.route('/:id')
	.get(function(req, res) {
		knex('pirates').where('id', req.params.id).first()
		.then(function(pirate) {
			res.send(pirate);
		}).catch((err) => {
			res.send(err);
		});
	})

	.put(function(req, res){
		knex('pirates')
		.where('id', req.params.id)
		.update(req.body.pirate)
		.then(function() {
			res.send('Pirate Updated!')
		}).catch(function(err) {
			res.send(err)
		})
	})


	.delete(function(req, res) {
		knex('pirates').where('id', req.params.id).del()
		.then(function() {
			res.send('Pirate Deleted')
		}).catch(function(err) {
			console.log(err);
		});
	})

module.exports = router;