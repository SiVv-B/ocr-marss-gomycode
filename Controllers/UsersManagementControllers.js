const mongoose = require("mongoose")
const User = require("../Models/User")
const Intervenant = require("../Models/Intervenant")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const toId=  mongoose.Types.ObjectId
//create one user
//@request.body
const postUser = async (request, response) => {
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
/*     await newUser.save()
    response.status(200).json({ user: newUser })
  } catch (error) {
    response.status(500).json({ error: "Client non enregistré" })
  }
} */
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

//get request
//no need to teh request body
//no nee to request.paramps
const getAllUsers = async (request, response) => {
  try {
    const users = await User.find()
    response.status(200).json({ users: users })
  } catch (error) {
    response.status(500).json({ error: "opération de récupération des clients échouée" })
  }
}
//delete request
//i need request.params
const deleteUser = async (request, response) => {
  try {
    const id = request.params.id
    await User.findByIdAndDelete(id)
    response
      .status(200)
      .json({ message: "Client supprimé avec succès" })
  } catch (error) {
    response.status(500).json({ error: "Supression échouée" })
  }
}
//update user 
//I need request.params
//I need request.body

const updateUser=async(request,response)=>{
  const id =request.params.id
  const newUser=request.body
try {
   const updatedUser =await User.findByIdAndUpdate(id,newUser,{new:true})
   response.status(200).json({user:updatedUser, message:'Mise à jour du client effectuée avec succès'})
} catch (error) {
 console.log("la mise à jour n'a pas pu être effectuée",error)
   response.status(500).json({error:'modification échouée'})
}
}



//get one specefic
//I need request.params
const getOneUser=async(request,response)=>{
    const id =request.params.id
    try {
        const userFound=await User.findById(id)
        response.status(200).json({userFound:userFound})

    } catch (error) {
      console.log("Impossible de récupérer le client")
        response.status(500).json({error:'Client non récupéré'})
    }
}


module.exports = { postUser, getAllUsers ,deleteUser,updateUser,getOneUser}