

import express, { Request, Response } from "express";
import path from "path";

const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
console.log(root);
const rootPublic = path.join(root, "public");
console.log(rootPublic);

const server = express();

server.use(express.static(path.join(__dirname, rootPublic)));

server.get("*", (req: Request, res: Response) => {
  res.type("text/html");
  res.sendFile(path.join(rootPublic, "index.html"));
});
// 404 페이지 작성
server.use((req: Request, res: Response) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 서버 포트 번호 이다.
server.listen(8080, () => {
  console.log(`연결 성공`);
});
