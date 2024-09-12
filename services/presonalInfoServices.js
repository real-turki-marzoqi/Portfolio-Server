const asyncHandler = require('express-async-handler')
const PersonalInfo = require('../config/models/presonalInfoModel')


// @desc GET Perosonal Infos
// @route GET /api/v1/personalInfo/:id
// access Public
exports.getPersonalIno = asyncHandler(async(req,res)=>{

    const personalInfo = await PersonalInfo.find({})

    res.status(200).json({data:personalInfo})
})

// @desc Create Messages
// @route POST /api/v1/personalInfo/:id
// access Private
exports.createPersonalInfo = asyncHandler(async(req,res)=>{

    const personalInfo = await PersonalInfo.create(req.body)

    res.status(201).json({data:personalInfo})
})

// @desc Update Messages
// @route PUT /api/v1/personalInfo/:id
// access Private
exports.updatePersonalInfo = asyncHandler(async(req,res)=>{

const {id} = req.params

const personalInfo = await PersonalInfo.findOneAndUpdate({_id:id},req.body  , {new:true})

if(!personalInfo){
    return res.status(404).json({ msg: `No Personal info Found For This ID ${id}` });
}

res.status(200).json({data:personalInfo})
})