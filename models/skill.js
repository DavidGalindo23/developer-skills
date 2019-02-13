const skills = [ 
    {skill: 'Java', done: true},
    {skill: 'C', done: true},
    {skill: 'C++', done: true},
    {skill: 'JS', done: true},
    {skill: 'CSS', done: false}
]; 

module.exports = { 
    getAll,
    getOne,
    create, 
    deleteOne
};

function deleteOne(id){ 
    skills.splice(id, 1); 
}

function create(skill){ 
    skills.push(skill);
}

function getOne(id){ 
    return skills[id];
}

function getAll(){ 
    return skills; 
}