
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    datasources: {
        db: {
            // connection string here
            url: process.env.DATABASE_URL,
        },
    },
});

module.exports = prisma
