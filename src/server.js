// express라는 package를 express라는 이름으로 import
import express from "express";
import morgan from "morgan";

//높은 숫자의 port는 보통 비어있기 때문에 사용가능
const PORT = 4000;

// express application 생성, express 설계를 위한 규칙
const app = express();
const logger = morgan("dev");

// app에게 get request에 답하는 방법 등 작성하는 위치는 app생성과 app.listen 사이

// middleware

// callback 함수의 첫번째 argument는 request, 두번째는 response
// express에게 제공받은 req, res
function handleHome(req, res) {
  // request를 중단 not middleware
  return res.send("home");
}

// app.use();는 모든 route에 적용된다.
app.use(logger);
app.get("/", handleHome);

// app.listen의 callback 함수
const listeningHandler = () =>
  console.log(`server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, listeningHandler);
