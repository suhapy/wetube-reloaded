// express라는 package를 express라는 이름으로 import
import express from "express";

//높은 숫자의 port는 보통 비어있기 때문에 사용가능
const PORT = 4000;

// express application 생성, express 설계를 위한 규칙
const app = express();
//callback 함수
const listeningHandler = () =>
  console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, listeningHandler);
