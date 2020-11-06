const express = require('express');
const router = express.Router();

const route = {
    technology: '/technologies'
}


router.get(route.technology, (req, res, next) => {
    res.send([{
        "id": "1",
        "name": "JavaScript",
        "experience": "3",
    },
    {
        "id": "2",
        "name": "TypeScript",
        "experience": "2",
    }])
})

router.post(route.technology, (req, res, next) => {
    res.send(req.body);
})

router.put(`${route.technology}/:id`, (req, res, next) => {
    res.send(req.body, req.params.id);
})


router.delete(`${route.technology}/:id`, (req, res, next) => {
    res.send(req.params.id);
})

module.exports = router;