const mongoose=require('mongoose');

//user = company (client)
//username = name of the company
//SelectedFile = company's logo or picture
const adminSchema=mongoose.Schema({

    SelectedFile: {
        type: String,
        default:
          "https://c8.alamy.com/comp/R5YAEG/gear-and-the-word-admin-3d-illustration-R5YAEG.jpg",
      },
    role: {
        type: Number,
        default: 0,
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
   


})
module.exports=mongoose.model('Admin',adminSchema)

