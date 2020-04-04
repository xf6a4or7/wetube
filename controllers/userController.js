import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }
    //To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do: Process Log out
  res.redirect("/");
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "user detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "edit profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change password" });
