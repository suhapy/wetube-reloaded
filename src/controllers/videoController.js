export const trending = (req, res) => {
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
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      coments: 1,
      createdAt: "1 minutes ago",
      views: 9,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
}; // render 는 2가지 인수를 받는다. 1.view이름 2.template에 보낼 변수
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
