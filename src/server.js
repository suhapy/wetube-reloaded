// express라는 package를 express라는 이름으로 import
import express from "express";

//높은 숫자의 port는 보통 비어있기 때문에 사용가능
const PORT = 4000;

// express application 생성, express 설계를 위한 규칙
const app = express();

// app에게 get request에 답하는 방법 등 작성하는 위치는 app생성과 app.listen 사이

// callback 함수의 첫번째 argument는 request, 두번째는 response
// express에게 제공받은 req, res
function homeGetHandler(req, res) {
  // request를 중단
  return res.end();
}

function loginGetHandler(req, res) {
  // 화면에 send를 보여주며 request 중단
  return res.send("login page");
}

app.get("/", homeGetHandler);
app.get("/login", loginGetHandler);

// app.listen의 callback 함수
const listeningHandler = () =>
  console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, listeningHandler);
