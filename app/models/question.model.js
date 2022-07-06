module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {

            surveyid: {
                type: DataTypes.STRING
            },
            userid:{
                type: DataTypes.STRING
            },
            description:{ 
                type: DataTypes.STRING
            },
            type:{
                type:DataTypes.STRING
            },
            options:{
                type:DataTypes.STRING
            }
        }
        )
        return Question
    }
    