// 파이어베이스
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9bRdOmVS1arflDwbTJgM1ji0-Vt_JeHE",
  authDomain: "krapli441portfolio.firebaseapp.com",
  projectId: "krapli441portfolio",
  storageBucket: "krapli441portfolio.appspot.com",
  messagingSenderId: "154267580809",
  appId: "1:154267580809:web:a00aa7160578f8aae48958",
  measurementId: "G-JTBCG8GVM1",
};

const app = initializeApp(firebaseConfig);

import express, { Request, Response } from "express";
import path from "path";

const server = express();

server.use(express.static(path.join(__dirname)));

server.get("*", (req: Request, res: Response) => {
  res.type("text/html");
  res.sendFile(path.join(__dirname, "../public/index.html"));
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
