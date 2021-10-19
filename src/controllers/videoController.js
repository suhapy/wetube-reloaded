export const trending = (req, res) => res.render("home", { pageTitle: "Home" }); // render 는 2가지 인수를 받는다. 1.view이름 2.template에 보낼 변수
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
