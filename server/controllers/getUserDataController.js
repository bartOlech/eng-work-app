const mongoose = require('mongoose');
const UsersDataModel = require('../Models/UsersModel');

// NIEUZYWANE

module.exports.get = (req, res) => {
    // connect to database
    mongoose.connect('mongodb+srv://olechbartlomiej:Forhuta123@quizapp.mpygt.mongodb.net/eng-work?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(console.log('MongoDB conected')).catch(err => console.log(err))
    mongoose.Promise = global.Promise;

    const options = {
      id: req.query.id,
    }

    UsersDataModel.find(options).then((users)=>{
        res.status(200).json({data: users});
    }).catch(err => {
      console.log(err)
      res.status(500).json({error: "Something went wrong..."});
    })
}