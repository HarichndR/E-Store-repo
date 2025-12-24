require('module-alias/register');
const app = require('./app');
const cors = require('cors');
const { prisma } = require('@config/database.js');
const logger = require('./utils/logger.js');
require('dotenv').config();
app.use(cors());
(async () => {
    await prisma.connect();
    const res = await prisma.query('SELECT version()');
    logger.info('database connectin was succefull');
})();
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    logger.info('Server is running on port', PORT);
})

