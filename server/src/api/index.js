require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const errorHandler = require('../middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 5000;

const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 10,
});

const speedLimiter = slowDown({
	windowMs: 60 * 1000,
	delayAfter: 10,
	delayMs: 500,
});

app.use(limiter);
app.use(speedLimiter);
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

// Not found

// Error handler
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}`));
