import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To Do: Upload and Save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });
