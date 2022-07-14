const db = require("../models");
const Survey = db.survey;
const Op = db.Sequelize.Op;

// Create and Save a new Survey
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Survey
  const survey = {
    title: req.body.title,
    description: req.body.description,
    surveymanager: req.body.surveymanager
  };

  // Save Survey in the database
  Survey.create(survey)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the survey."
      });
    });
};

// Retrieve all albums from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Survey.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Surveys."
      });
    });
};
//find By Survey Managers
exports.findAllBySurveyManagers = (req, res) => {
  const surveymanager = req.params.surveymanager;

    Survey.findAll({  where: { surveymanager: surveymanager } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Survey by surveymanager."
        });
      });
};
// Find a single Survey with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Survey.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Survey with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Survey with id=" + id
      });
    });
};

// Update a Survey by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Survey.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Survey with id=${id}. Maybe Survey was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Survey with id=" + id
      });
    });
};

// Delete a Survey with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Survey.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Survey with id=" + id
      });
    });
};

// Delete all Surveys from the database.
exports.deleteAll = (req, res) => {
  Survey.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Surveys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Surveys."
      });
    });
};

exports.findAllByArtist = (req, res) => {
  const surveymanager = req.query.surveymanager;
  var condition = surveymanager ? { surveymanager: { [Op.like]: `%${surveymanager}%` } } : null;

  Survey.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Surveys By surveymanager Name."
      });
    });
};
