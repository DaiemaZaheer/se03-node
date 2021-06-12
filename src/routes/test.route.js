const express = require('express');
const {testController} = require('../controllers');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/agent', testController.requestInfo);
router.get('/auth', auth(), testController.connection);
router.get('/', testController.connection);

module.exports = router;
