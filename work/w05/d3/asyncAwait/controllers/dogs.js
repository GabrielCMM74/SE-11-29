const Dog  = require('../models/dogs');

module.exports = {
  create,
  new: newDog,
  show,
  index,
  edit,
  update,
  delete: deleteDog
}

async function index(req, res) {

  // best practice to wrap these in try/catch blocks
  try {
    // dogDocuments is the result of Dog.find({})
    const dogDocuments = await Dog.find({});

    res.render('index.ejs', {
      dogs: dogDocuments
    })

  } catch(err){
    res.send(err)
  }

};

function newDog(req, res){
  res.render('new.ejs');
}



async function show(req, res){
  try {
    const dogDocument = await Dog.findById(req.params.id);
    console.log(dogDocument )
    res.render('show.ejs', {
      dog: dogDocument
    })

  } catch(err){
    res.send(err)
  }
}


function edit(req, res){
  Dog.findById(req.params.id, function(err, foundDog){
    if(err){
      res.send(err);
    } else {
      res.render('edit.ejs', {
        dog: foundDog
      })
    }
  });
}


 function update(req, res){
   Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedDog){
    console.log(updatedDog)
    res.redirect('/dogs')
   })
 }



// Parent model, with a dogs array
function create(req, res){
  Dog.create(req.body, function(err, dog){
    res.redirect('/dogs')
  })
}

function deleteDog(req, res){
  Dog.findByIdAndRemove(req.params.id, (err, deletedDog) => {
    console.log(deletedDog, ' this is deletedDog');
    res.redirect('/dogs')
  })
}

