const express=require("express")
const router=express.Router()
const KindergartenController=require("../controller/KindergartenController")
router.get("/",KindergartenController.getAllKindergarten)
router.get("/:_id",KindergartenController.getKindergartenByID )
router.put("/:_id",KindergartenController.updateKindergarten)
router.delete("/:_id", KindergartenController.deleteKindergarten)
router.post("/",KindergartenController.addKindergarten)
module.exports=router