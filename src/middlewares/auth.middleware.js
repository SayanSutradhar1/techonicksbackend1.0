export function isAuthenticated(req, res, next) {
  console.log(req.cookies.token);
  if (req.cookies.token) {
    next();
  } else {
    console.log("User is not authenticated, Log in first!");
    res.status(200).json({
      success: false,
      status: "N",
      message: "User is not authenticated, Log in first!",
    });
  }
}

export function isLoggedIn(req, res, next) {
  if (!req.cookies.token) {
    next();
  } else {
    console.log("User is already logged in");
    res.status(201).json({
      success: true,
      status: "L",
      message: "User is already logged in",
    });
  }
}
