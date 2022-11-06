// // designation routes

// const designation = require("./../models/designationModel")
// // Add new designation
// router.post("/designation", async (req, res) => {
//     console.log(req.body)
//     const data = new designation(req.body)
//     const result = await data.save()

//     if (!result) {
//         res.json({
//             status: "FAILED",
//             message: "designation not added successfully...."
//         })
//     }
//     else {
//         res.json({
//             status: "SUCCESS",
//             message: "designation added successfully....",
//             data: result
//         })
//     }
// })

// //get designations
// router.get("/designation", async (req, res) => {
//     try {
//         const result = await designation.find()
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Not found record"
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Records found",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         console.log(e)
//     }
// })

// //get single designation
// router.get("/designation/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await designation.findById(_id);
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Record not found on this ID"
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Records found",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// })

// // update records
// router.put("/designation/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await designation.findByIdAndUpdate(_id,req.body,{new: true});
//         console.log(result)
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Records not Update....",
//                 data: result
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Record is Updated successfully...",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// })

// // Delete designation
// router.delete("/designation/:id", async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await designation.findByIdAndDelete(_id);
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Record not Delete..."
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Record is Delete successfully..."
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// })
const express = require("express");

const router = express.Router();

const designationController = require("../controller/designationController");

router
  .route("/")
  .get(designationController.getDesignations)
  .post(designationController.createDesignation);
router
  .route("/:id")
  .get(designationController.getDesignationById)
  .patch(designationController.updateDesignation)
  .delete(designationController.deleteDesignation);

module.exports = router;

module.exports = router;
