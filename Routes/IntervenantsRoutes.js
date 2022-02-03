const express=require('express')
const router=express.Router()
const {postIntervenant,getAllIntervenants,deleteIntervenant,updateIntervenant,getOneIntervenant,ProfileIntervenantToUser,allIntervenantduclient}=require('../Controllers/IntervenantController')
/* const {authRole} =require('../Controllers/AuthController')
 */
router.post('/intervenant',postIntervenant)
router.get('/intervenant',getAllIntervenants)
router.delete('/intervenant/:id',deleteIntervenant)
router.put('/intervenant/:id',updateIntervenant)
router.get('/intervenant/:id',getOneIntervenant)


//link user with intervenant:
router.get('/intervenantduclient/:intervenant/:user',ProfileIntervenantToUser)
router.get("/toutintervenantsdesclients", allIntervenantduclient )

module.exports=router