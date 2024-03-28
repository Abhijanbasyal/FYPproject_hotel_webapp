import mongoose from "mongoose";
const RoomTypesSchema = new mongoose.Schema({
  roomName: {        //the kings room 
    type: String,
    required: true,
  },
  roomType: {            //4sitter, 5sitter, city
    type: String,
    required: true,
  },
  roomPhotos: {
    type: [String],      //room photos
  },
  roomDesc: {
    type: String, 
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("RoomTypes", RoomTypesSchema)