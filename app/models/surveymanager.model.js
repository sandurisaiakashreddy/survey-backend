module.exports = (sequelize, DataTypes) => {
    const SurveyManager = sequelize.define('surveymanager', {
    
            email:{
                type: DataTypes.STRING,
                unique: true
            },
            password: DataTypes.STRING}
        )
        return SurveyManager
    }
    