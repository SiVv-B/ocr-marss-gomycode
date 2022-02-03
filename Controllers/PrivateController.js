//Ce sera le profil des clients

exports.getPrivateRoute = (req, res, next) => {
    res
      .status(200)
      .json({
        success: true,
        data: "Vous êtes maintenant connécté à votre profil",
      })
  }