const fakeUser = {
  username: "top1",
  loggedIn: false,
};

export const trending = (req, res) => {
  const videos = [
    {
      title: "video #01",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "video #02",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 2,
    },
    {
      title: "video #03",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};

export const upload = (req, res) => res.send("Upload");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  res.send(`Delete Video # ${req.params.id}`);
};
