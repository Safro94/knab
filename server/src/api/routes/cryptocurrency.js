const express = require('express');
const asyncHandler = require('express-async-handler');
const { getByCode } = require('../controllers/cryptocurrency');

const router = express.Router();

/*
 * GET request to api/cryptocurrency/:code
 */
router.get('/:code', asyncHandler(getByCode));

module.exports = router;
