const mongoose=require('mongoose');

//user = company (client)
//username = name of the company
//SelectedFile = company's logo or picture
const userSchema=mongoose.Schema({

          Intervenant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Intervenant",
          },
              role: {
        type: Number,
        default: 1,
      },
    SelectedFile: {
        type: String,
        default:
          "https://png.pngtree.com/background/20210709/original/pngtree-the-future-of-the-company-the-blue-background-picture-image_904634.jpg",
      },
    username:{
        type:String,
        required:true
    },
    NumSiret:{
        type:Number,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    SiegeSocialAdresse:{
        type:String,
    },
    SiegeSocialTelephone:{
        type:Number,
    },
    SiegeSocialEmail:{
        type:String,
    },
    RepresentantNom:{
        type:String,
    },
    RepresentFonction:{
        type:String,
    },
    RepresentantTelephone:{
        type:Number,
    },
    RepresentantEmail:{
        type:String,
    },
    RepresentantNumHabilitation:{
        type:Number,
    },
    SISERINumProtocole:{
        type:Number,
    },
    SISERINomCle:{
        type:Number,
    },
    SISERIUpdate:{
        type:Date,
    },
    MDTNom:{
        type:String,
    },
    MDTPrenom:{
        type:String,
    },
    MDTNumHabilitation:{
        type:Number,
    },
    MDTSiret:{
        type:Number,
    },
    MDTTelephone:{
        type:Number,
    },
    MDTEmail:{
        type:String,
    },
    ContratNum:{
        type:String,
    },
    ContratDateDebut:{
        type:Date,
    },
    ContratDateFin:{
        type:Date,
    },


})
module.exports=mongoose.model('User',userSchema)

