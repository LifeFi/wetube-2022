export const trending = (req, res) => res.send("Home Page Vides");
export const upload = (req, res) => res.send("Upload");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch # ${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send(`Edit # ${req.params.id}`);
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  res.send(`Delete Video # ${req.params.id}`);
};
