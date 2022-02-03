/* //this middleware will protect the routes by checking the user has a token
//this middleware will be used in  Routes/privare.js

const jwt = require('jsonwebtoken')
const User = require('../Models/User')
const ErrorResponse = require ("../Utils/errorResponse")

exports.protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    //then split the bearer part and the token part with a space
    token = req.headers.authorization.split(' ')[1]
  }
  //if there is no token (user not logged)
  if (!token) {
      return next (new ErrorResponse ('Vous n\'êtes pas autorisé à accéder à cette page', 401))
  }

  //decode the token we got 
  //by decoding the token and find the user by its id (the id is inside the token thanks to the method getSignedToken)
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findById(decoded.id)

     //if the user is not found:
     if(!user) {
        return next(new ErrorResponse('Aucun utilisateur trouvé avec ce ID', 404))
     } 
     //add the user on the route
     req.user = user
     next()
  } catch (error) {
      return next(new ErrorResponse('Vous n\'êtes pas autorisé à accéder à cette page',401))
  }
}
 */