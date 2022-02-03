const sendEmail = require ("../Utils/SendEmails")
const User = require('../Models/User')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const registerController = async (request, response) => {
  let user = request.body
  try {
    const searchedUser = await User.findOne({ email: user.email })
    if (searchedUser) {
      return response.status(400).json({ errors:[{msg:"Ce client éxiste déjà"}] })
    }
    const hashedPasword = await bcrypt.hash(user.password, 10)
    const newUser = await new User({
      username: user.username,
      email: user.email,
      password: hashedPasword,
      SelectedFile:user.SelectedFile,
      NumSiret:user.NumSiret,
      role:user.role,
      SiegeSocialAdresse:user.SiegeSocialAdresse,
      SiegeSocialTelephone:user.SiegeSocialTelephone,
      SiegeSocialEmail:user.SiegeSocialEmail,
      RepresentantNom:user.RepresentantNom,
      RepresentFonction:user.RepresentFonction,
      RepresentantTelephone:user.RepresentantTelephone,
      RepresentantEmail:user.RepresentantEmail,
      RepresentantNumHabilitation:user.RepresentantNumHabilitation,
      SISERINumProtocole:user.SISERINumProtocole,
      SISERINomCle:user.SISERINomCle,
      SISERIUpdate:user.SISERIUpdate,
      MDTNom:user.MDTNom,
      MDTPrenom:user.MDTPrenom,
      MDTNumHabilitation:user.MDTNumHabilitation,
      MDTSiret:user.MDTSiret,
      MDTTelephone:user.MDTTelephone,
      MDTEmail:user.MDTEmail,
      ContratNum:user.ContratNum,
      ContratDateDebut:user.ContratDateDebut,
      ContratDateFin:user.ContratDateFin,

    })
    await newUser.save()
    const token = jwt.sign(
      { 
        username: newUser.username, 
        email: newUser.email, 
         password:hashedPasword,
        id: newUser._id,
        SelectedFile:newUser.SelectedFile,
      NumSiret:newUser.NumSiret,
      role:newUser.role,
      SiegeSocialAdresse:newUser.SiegeSocialAdresse,
      SiegeSocialTelephone:newUser.SiegeSocialTelephone,
      SiegeSocialEmail:newUser.SiegeSocialEmail,
      RepresentantNom:newUser.RepresentantNom,
      RepresentFonction:newUser.RepresentFonction,
      RepresentantTelephone:newUser.RepresentantTelephone,
      RepresentantEmail:newUser.RepresentantEmail,
      RepresentantNumHabilitation:newUser.RepresentantNumHabilitation,
      SISERINumProtocole:newUser.SISERINumProtocole,
      SISERINomCle:newUser.SISERINomCle,
      SISERIUpdate:newUser.SISERIUpdate,
      MDTNom:newUser.MDTNom,
      MDTPrenom:newUser.MDTPrenom,
      MDTNumHabilitation:newUser.MDTNumHabilitation,
      MDTSiret:newUser.MDTSiret,
      MDTTelephone:newUser.MDTTelephone,
      MDTEmail:newUser.MDTEmail,
      ContratNum:newUser.ContratNum,
      ContratDateDebut:newUser.ContratDateDebut,
      ContratDateFin:newUser.ContratDateFin,
      },
      process.env.KEY
    )

 response.status(200).json({ newUser, token })
  } catch (error) {
    response.status(500).json({ errors:[{msg:"Création de compte a échoué(registerController a écouhé, from authcontroller)"}] })
  }
} 


 const loginController = async (request, response) => {
  //request
  const user = request.body
  try {
    //search for user
    const searchedUser = await User.findOne({ email: user.email })
    if (!searchedUser) {
      return response.status(401).json({ errors:[{msg:"Veuillez créer un compte pour pouvoir vous connecter"}] })
    }
    //compare the passwordl of the user request with the password saved on the databse (searchedUser)
    const result = await bcrypt.compare(user.password, searchedUser.password)
    if (!result) {
      return response.status(400).json({ errors:[{msg:"Mot de pass incorrect"}] })
    }
    if (result == true) {
      const token = await jwt.sign(
        {
          username: searchedUser.username,
          email: searchedUser.email,
          id: searchedUser._id,
        },
        process.env.KEY
      )

       response.status(200).json({searchedUser,token}) 

    }
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: "votre authentification a échoué" })
  }
} 


//Setting admin and user roles 

/* function authRole(role) {
  return (req,res,next) =>{
    const userRole = req.body.role
    if (role.includes(userRole)) {
      next()
    }else {
      return res.status(401).json('Accès non autorisé')
    }
  }
} */
/* function authRole(role) {
  return (req,res,next) =>{
if (req.user.role !== role) {
res.status(401)
return res.send('Non autorisé')
}
next()
  }
} */


/* 
exports.forgotPassword = async (req, res, next) => {
  //get email from the body
  const { email } = req.body
  try {
    const user = await User.findOne({ email })
    console.log(user, "forgot password")
    //check if the user exists in the DataBase
    if (!user) {
      return next(new ErrorResponse('L\'email n\'a pas pu être envoyé', 404))
    }
// Reset Token Gen and add to database hashed (private) version of token    
const resetToken = user.getResetPasswordToken()
    //save the token in database
    await user.save()
//Link to email to the client (in front end)
    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`
    //the sent message to the client:
    const message = `
    <h1>Vous avez demandé de changer votre mot de pass</h1>
      <p>Veuillez cliquer sur le lien ci-dessous:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`
    //The method that allows to sen the email
    try {
      //create an email sender //need package nodemailer and signup at SendGrid.com
       await sendEmail({
        to: user.email,
        subject: "Modification du mot de pass",
        text: message,
      })
      res.status(200).json({ success: true, data: "Email envoyé" })
    } catch (error) {
      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined
      await user.save()
      return next(new ErrorResponse("L\'email n\'a pas pu être envoyé",500))
    }
  } catch (error) {
    next(error)
  }
}
 */
/* 
  exports.resetPassword = async (req, res, next) => {
    // Compare token in URL params to hashed token
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex")
  
    try {
      //search for a user who has the same password
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      })
  
      if (!user) {
        return next(new ErrorResponse("Invalid Token", 400))
      }
  //Once we find the user, we send the new password, the token and the expiration date
      user.password = req.body.password
      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined
  
      await user.save()
  
      res.status(201).json({
        success: true,
        data: "Le mot de pass a été modifié avec succès",
      })
    } catch (err) {
      console.log(err,"resetPassword error")
      next(err)
    }
} */

//a methode that generates token for us
//Use this method in every controllers that uses token

/* const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({ sucess: true, token })
} */


module.exports = { registerController, loginController }