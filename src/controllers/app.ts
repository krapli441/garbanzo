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

import express from "express";
