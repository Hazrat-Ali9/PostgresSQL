import { PrismaClient } from "@prisma/client";
import app from "./app";
// index cheak the server
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;
async function main() {
  app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });
}

main();
