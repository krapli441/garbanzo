// 리액트 라이브러리, 훅스
import React from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

// 파이어베이스
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// // env
// import dotenv from "dotenv";
// dotenv.config({ path: "../.env" });

// ChakraUI
import { ChakraProvider } from "@chakra-ui/react";

// const firebaseConfig = {
//   apiKey: "AIzaSyD9bRdOmVS1arflDwbTJgM1ji0-Vt_JeHE",
//   authDomain: "krapli441portfolio.firebaseapp.com",
//   projectId: "krapli441portfolio",
//   storageBucket: "krapli441portfolio.appspot.com",
//   messagingSenderId: "154267580809",
//   appId: "1:154267580809:web:a00aa7160578f8aae48958",
//   measurementId: "G-JTBCG8GVM1",
// };

// const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
