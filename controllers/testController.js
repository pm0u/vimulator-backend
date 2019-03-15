const Test = require('../models/test')



exports.listAllTests = (req, res) => {
    Test.find({}, (err, test) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(test);
    });
  };
  
  exports.createNewTest = (req, res) => {
    let newTest = new Test(req.body);
    newTest.save((err, test) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).json(test);
    });
  };