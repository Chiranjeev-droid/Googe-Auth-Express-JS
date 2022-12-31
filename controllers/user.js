export const myProfile = (req, res, next) => {
  // if (!req.user) {
  //   return res.status(200).json({
  //     success: false,
  //     message: "Please login first",
  //   });
  // }
  res.status(200).json({
    success: true,
    //passport js gives us user in the request.user
    user: req.user,
  });
};

export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged Out",
    });
  });
};
