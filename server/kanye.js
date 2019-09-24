const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/kanye', (req, res) => {
    request.get('https://api.kanye.rest')
    .end((err, result) => {
        if(err){
            res.status(500).send(err.message)
        } else {
            res.json(result.body)
        }
    })
})

module.exports = router