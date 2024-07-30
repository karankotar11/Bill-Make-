import mongoose from "mongoose";
const LocationSchema =mongoose.Schema({
    latitude:String,
    longitude:String,
    openAt:{
        type:Date,
        default:Date.now,
    }

});
const LocationofUser = mongoose.models.LocationofUser || mongoose.model('LocationofUser',LocationSchema);
export default LocationofUser;