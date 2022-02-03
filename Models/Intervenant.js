const mongoose=require('mongoose');
const User = require("./User")


//user = company (client)
//username = name of the company
//SelectedFile = company's logo or picture
const IntervenantSchema=mongoose.Schema({
          User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },

    SelectedFile: {
        type: String,
        default:
          "https://e7.pngegg.com/pngimages/1007/328/png-clipart-construction-worker-laborer-handyman-computer-icons-others-miscellaneous-service.png",
      },
    Categorie: {
        type: String,
      },
    Nom:{
        type:String
    },
    Prenom:{
        type:String,
    },
    DateDeNaissance:{
        type:Date,
    },
    NSS:{
        type:Number,
    },
    NSuiviCarte:{
        type:Number,
    },
   DateDerniereVisiteMedicale:{
        type:Date,
    },
    VisiteMedicaleARenouvelerAvantLe:{
        type:Date,
    },
    DateDerniereFicheDexposition:{
        type:Date,
    },
    DateDerniereFicheDaptitude:{
        type:Date,
    },
    Commentaire:{
        type:String,
    },
    CarteIdentite:{
        type:String,
    },
    CarteVitale:{
        type:String,
    },
    AutreCommentaire:{
        type:String,
    }
})
module.exports=mongoose.model('Intervenant',IntervenantSchema)

