import RoomTypes from "../models/RoomTypes.js";
import Room from "../models/Room.js";


//create room
export const createRoomTypes = async (req, res, next) => {
  const newRoomTypes = new RoomTypes(req.body);

  try {
    const savedRoomTypes = await newRoomTypes.save();
    res.status(200).json(savedRoomTypes);
  } catch (err) {
    next(err);
  }
};

//update room
export const updateRoomTypes = async (req, res, next) => {
  try {
    const updatedRoomTypes = await RoomTypes.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoomTypes);
  } catch (err) {
    next(err);
  }
};

//delete room
export const deleteRoomTypes = async (req, res, next) => {
  try {
    await RoomTypes.findByIdAndDelete(req.params.id);
    res.status(200).json("RoomTypes has been deleted.");
  } catch (err) {
    next(err);
  }
};


//get one room
export const getRoomType = async (req, res, next) => {
  try {
    const roomtype = await RoomTypes.findById(req.params.id);
    res.status(200).json(roomtype);
  } catch (err) {
    next(err);
  }
};
export const getRoomTypes = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const roomtypes = await RoomTypes.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(roomtypes);
  } catch (err) {
    next(err);
  }
};
export const countByRoomType = async (req, res, next) => {  //in searching 
  const roomtypo = req.query.roomtypo.split(",");
  try {
    const list = await Promise.all(
      roomtypo.map((roomType) => {
        return RoomTypes.countDocuments({ roomType: roomType });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }

};

// export const countByType = async (req, res, next) => {  //in featured properties
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

export const getRoomsNumber = async (req, res, next) => {
  try {
    const roomtype = await RoomTypes.findById(req.params.id);
    const list = await Promise.all(
      roomtype.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};
