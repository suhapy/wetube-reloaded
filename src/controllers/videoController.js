const videos = [
  {
    title: "First Video",
    rating: 5,
    coments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3,
    coments: 10,
    createdAt: "10 minutes ago",
    views: 167,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    coments: 1,
    createdAt: "1 minutes ago",
    views: 1,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home:", videos });
}; // render 는 2가지 인수를 받는다. 1.view이름 2.{변수이름 : template에 보낼 변수}
export const see = (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  // video.id를 prams에 넣어 줄 때와 반대로 prams를 이용해 video를 찾는다.
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // here we will add a video to the videos array
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    coments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
