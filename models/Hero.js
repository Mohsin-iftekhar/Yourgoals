const mongoose=require('mongoose');
const HeroSchema=new mongoose.Schema({
    superHero:{
        type:String,
        required:[true,'give name'],
        unique:true,
        trim:true
    },
    realName:{
        type:String,
        required:true,
        maxle:[1000,'within 1000']
    }
})

module.exports=mongoose.models.Hero||mongoose.model('Hero',HeroSchema);
