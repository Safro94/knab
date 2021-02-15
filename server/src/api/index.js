require('dotenv').config();
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
require('../utils/cache');

const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');
const cryptocurrency = require('./routes/cryptocurrency');

const app = express();
const port = process.env.PORT || 5000;

const limiter = rateLimit({
	windowMs: 60 * 1000,
	max: 30,
});

const speedLimiter = slowDown({
	windowMs: 60 * 1000,
	delayAfter: 30,
	delayMs: 500,
});

const corsOptions = {
	origin: process.env.CLIENT_URL,
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(limiter);
app.use(speedLimiter);
app.use(compression());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/cryptocurrency', cryptocurrency);

// Not found
app.use(notFound);

// Error handler
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}`));
