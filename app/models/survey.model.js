module.exports = (sequelize, Sequelize) => {
    const Survey = sequelize.define("survey", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      surveymanager:{
        type: Sequelize.STRING
      }
    });
  
    return Survey;
  };
  