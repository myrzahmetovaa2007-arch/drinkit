import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.static("public"));

  // Все маршруты обрабатывает Next.js
  server.all("/:path*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log("✅ Сервер запущен: http://localhost:3000");
  });
});
