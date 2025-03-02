const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");
const userSchema=new Schema({
email:{
    type:String,
    required:true
}
// username and pswrd will automatically created by userlocalmongoose library in npm so we dont needed to write it
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',userSchema);