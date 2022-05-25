const express = require('express');
const router = express.Router();
const dogCtrl = require('../controllers/dogs');

router.get('/', dogCtrl.index);
router.get('/new', dogCtrl.new);
router.get('/:id/edit', dogCtrl.edit)
router.get('/:id', dogCtrl.show);
router.put('/:id', dogCtrl.update)
router.post('/', dogCtrl.create);
router.delete('/:id', dogCtrl.delete)

module.exports = router;