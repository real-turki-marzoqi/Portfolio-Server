const asyncHandler = require('express-async-handler')
const PersonalInfo = require('../config/models/presonalInfoModel')

exports.getPersonalIno = asyncHandler(async(req,res)=>{

    const personalInfo = await PersonalInfo.find({})

    res.status(200).json({data:personalInfo})
})

exports.createPersonalInfo = asyncHandler(async(req,res)=>{

    const personalInfo = await PersonalInfo.create(req.body)

    res.status(201).json({data:personalInfo})
})