const mongoose = require("mongoose")
const Intervenant = require("../Models/Intervenant")
const User = require("../Models/User")
const toId=  mongoose.Types.ObjectId
//Add intervenant
//@request.body
const postIntervenant = async (request, response) => {
  const intervenant = request.body
  try {
    const searchedIntervenant = await Intervenant.findOne({ NSS: intervenant.NSS })
    if (searchedIntervenant) {
      return response
        .status(400)
        .json({ message: "Cet intervenant est déjà enregistré" })
    }
    const newIntervenant = await new Intervenant({
        NSS: intervenant.NSS,
        Nom: intervenant.Nom,
        Prenom: intervenant.Prenom,
        SelectedFile: intervenant.SelectedFile,
        DateDeNaissance:intervenant.DateDeNaissance,
        NSuiviCarte:intervenant.NSuiviCarte,
        DateDerniereVisiteMedicale:intervenant.DateDerniereVisiteMedicale,
        VisiteMedicaleARenouvelerAvantLe:intervenant.VisiteMedicaleARenouvelerAvantLe,
        DateDerniereFicheDexposition:intervenant.DateDerniereFicheDexposition,
        DateDerniereFicheDaptitude:intervenant.DateDerniereFicheDaptitude,
        Commentaire:intervenant.Commentaire,
        AutreCommentaire:intervenant.AutreCommentaire,
        CarteIdentite:intervenant.CarteIdentite,
        CarteVitale:intervenant.CarteVitale,

    })
    await newIntervenant.save()
    response.status(200).json({ intervenant: newIntervenant })
  } catch (error) {
    response.status(500).json({ error: "L'intervenant n'a pas pu être enregistré" })
  }
}
//get request
//no need to teh request body
//no nee to request.paramps
const getAllIntervenants = async (request, response) => {
  try {
    const intervenants = await Intervenant.find()
    response.status(200).json({ intervenants: intervenants })
  } catch (error) {
    console.log('erreur get all intervenants router',error)
    response.status(500).json({ error: "laffichage de tous les intervenats a échoué" })
  }
}
//delete request
//i need request.params
const deleteIntervenant = async (request, response) => {
  try {
    const id = request.params.id
    await Intervenant.findByIdAndDelete(id)
    response
      .status(200)
      .json({ message: "L'intervenat a été effacé avec succès" })
  } catch (error) {
    response.status(500).json({ error: "la suppression de l'intervenant a échoué" })
  }
}
//update intervenant 
//I need request.params
//I need request.body
const updateIntervenant=async(request,response)=>{
    const id =request.params.id
    const newIntervenant=request.body
 try {
     const updateIntervenant =await Intervenant.findByIdAndUpdate(id,newIntervenant,{new:true})
     response.status(200).json({intervenant:updateIntervenant,message:'Intervenant mis à jour'})
 } catch (error) {
     response.status(500).json({error:"mis à jour de l'intervenant a échoué"})
 }
}
//get one specefic Intervenant
//I need request.params
const getOneIntervenant=async(request,response)=>{
    const id =request.params.id
    try {
        const intervenantFound=await Intervenant.findById(id)
        response.status(200).json({intervenant:intervenantFound})

    } catch (error) {
        response.status(500).json({error:"l'Intervenant n'a pas pu être trouvé"})
    }
}



//link Intervenant To User
/* const ProfileIntervenantToUser = async (req,res)=>{
  //get user's id
  req.params.User = toId(req.params.user)
  //get intervenant's id
  const intervenant = await Intervenant.findById(req.params.intervenant)
  intervenant.User = req.params.User
  intervenant.save()
  res.status(200).json({intervenantDuClient:intervenant})
} */


const ProfileIntervenantToUser = async (req,res)=>{
 //to get an intervenant
  const id = req.params.id
  const intervenantFound = await Intervenant.findById(id).populate('User',['username,SelectedFile,email,NumSiret'])
  res.status(200).json()




}





//get all intervenants linked with user
const allIntervenantduclient = async(req,res)=>{
  const inervenants = await Intervenant.find().populate('User')
  res.json({intervenantDuClient:inervenants})
}
module.exports = { postIntervenant, getAllIntervenants ,deleteIntervenant,updateIntervenant,getOneIntervenant,ProfileIntervenantToUser,allIntervenantduclient}
