module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('answer', {

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
            },
            answer:{
                type:DataTypes.STRING
            }
        }
        )
        return Answer
    }
    