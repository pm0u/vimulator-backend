const Unit = require('../models/Unit')


exports.getAllUnits = (req, res) => {
    Unit.find({}, (err, units) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(units);
        }
    })
}

exports.getUnitByID = (req, res) => {
    Unit.findById(req.params.unitID, (err, unit) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(unit);
        }
    })

}

exports.createNewUnit = (unit) => {
    let newUnit = new Unit(unit)
    return newUnit.save()

}

exports.deleteUnitByID = (unitID) => {
    return Unit.remove({ _id: unitID })
}