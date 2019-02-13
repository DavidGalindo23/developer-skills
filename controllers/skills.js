var skill = require('../models/skill'); 

module.exports = { 
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill
}; 

function deleteSkill(req,res){ 
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req,res){ 
    req.body.done = false; 
    skill.create(req.body); 
    res.redirect('/skills'); 
}

function newSkill(req,res){ 
    res.render('skills/new');
}

function show(req,res){ 
    res.render('skills/show', { 
        skill: skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function index(req,res) { 
    res.render('skills/index', { 
        skills: skill.getAll()
    });
}