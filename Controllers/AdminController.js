const mongoose = require('mongoose')
const Admin = require('../Models/Admin')
const User = require('../Models/User')
const Intervenant = require('../Models/Intervenant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const toId = mongoose.Types.ObjectId
//create one Admin
//@request.body
const postAdmin = async (request, response) => {
  let admin = request.body
  try {
    const searchedAdmin = await Admin.findOne({ email: admin.email })
    if (searchedAdmin) {
      return response
        .status(400)
        .json({ errors: [{ msg: 'cet identifiant existe déjà' }] })
    }
    const hashedPasword = await bcrypt.hash(admin.password, 10)
    const newAdmin = await new Admin({
      username: admin.username,
      email: admin.email,
      password: hashedPasword,
      SelectedFile: admin.SelectedFile,
      NumSiret: admin.NumSiret,
      role: admin.role,
      SiegeSocialAdresse: admin.SiegeSocialAdresse,
      SiegeSocialTelephone: admin.SiegeSocialTelephone,
      SiegeSocialEmail: admin.SiegeSocialEmail,
      RepresentantNom: admin.RepresentantNom,
      RepresentFonction: admin.RepresentFonction,
      RepresentantTelephone: admin.RepresentantTelephone,
      RepresentantEmail: admin.RepresentantEmail,
      RepresentantNumHabilitation: admin.RepresentantNumHabilitation,
      SISERINumProtocole: admin.SISERINumProtocole,
      SISERINomCle: admin.SISERINomCle,
      SISERIUpdate: admin.SISERIUpdate,
    })

    await newAdmin.save()
    const token = jwt.sign(
      {
        id: newAdmin._id,
        username: newAdmin.username,
        email: newAdmin.email,
        password: hashedPasword,
        SelectedFile: newAdmin.SelectedFile,
        NumSiret: newAdmin.NumSiret,
        role: newAdmin.role,
        SiegeSocialAdresse: newAdmin.SiegeSocialAdresse,
        SiegeSocialTelephone: newAdmin.SiegeSocialTelephone,
        SiegeSocialEmail: newAdmin.SiegeSocialEmail,
        RepresentantNom: newAdmin.RepresentantNom,
        RepresentFonction: newAdmin.RepresentFonction,
        RepresentantTelephone: newAdmin.RepresentantTelephone,
        RepresentantEmail: newAdmin.RepresentantEmail,
        RepresentantNumHabilitation: newAdmin.RepresentantNumHabilitation,
        SISERINumProtocole: newAdmin.SISERINumProtocole,
        SISERINomCle: newAdmin.SISERINomCle,
        SISERIUpdate: newAdmin.SISERIUpdate,
      },
      process.env.KEY,
    )

    response.status(200).json({ newAdmin, token })
  } catch (error) {
    response
      .status(500)
      .json({
        errors: [
          {
            msg:
              'Création de compte a échoué(registerController a écouhé, from authcontroller)',
          },
        ],
      })
  }
}

//get request
//no need to teh request body
//no nee to request.paramps
const getAllAdmins = async (request, response) => {
  try {
    const admins = await Admin.find()
    response.status(200).json({ admins: admins })
  } catch (error) {
    response
      .status(500)
      .json({ error: "opération de récupération de l'administrateur échouée" })
  }
}
//delete request
//i need request.params
const deleteAdmin = async (request, response) => {
  try {
    const id = request.params.id
    await Admin.findByIdAndDelete(id)
    response
      .status(200)
      .json({ message: 'Administrateur supprimé avec succès' })
  } catch (error) {
    response.status(500).json({ error: 'Supression échouée' })
  }
}
//update admin
//I need request.params
//I need request.body

const updateAdmin = async (request, response) => {
  const id = request.params.id
  const newAdmin = request.body
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, newAdmin, {
      new: true,
    })
    response
      .status(200)
      .json({
        admin: updatedAdmin,
        message: "Mise à jour de l'administrateur effectuée avec succès",
      })
  } catch (error) {
    console.log(
      "la mise à jour de l`'administrateur n'a pas pu être effectuée",
      error,
    )
    response.status(500).json({ error: 'modification échouée' })
  }
}
//get one specefic admin
//I need request.params
const getOneAdmin = async (request, response) => {
  const id = request.params.id
  try {
    const adminFound = await Admin.findById(id)
    response.status(200).json({ adminFound: adminFound })
  } catch (error) {
    console.log("Impossible de récupérer l'administrateur")
    response.status(500).json({ error: 'Administrateur non récupéré' })
  }
}

module.exports = {
  postAdmin,
  getAllAdmins,
  deleteAdmin,
  updateAdmin,
  getOneAdmin,
}
