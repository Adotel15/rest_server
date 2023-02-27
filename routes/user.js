
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: "Ya lo see"
    })
});

router.put('/', (req, res) => {
    res.json({
        message: "put Ya lo see"
    })
});

router.post('/', (req, res) => {
    res.json({
        message: " post Ya lo see"
    })
});

router.delete('/', (req, res) => {
    res.json({
        message: " delete Ya lo see"
    })
});




module.exports = router;