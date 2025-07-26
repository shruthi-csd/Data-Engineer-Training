use SmartHomeDB;

db.rooms.insertMany([
  { room_id: 1, name: "Study Room" },
  { room_id: 2, name: "Guest Room" },
  { room_id: 3, name: "Bathroom" }
]);


db.devices.insertMany([
  { device_id: 201, name: "Smart Lamp", room_id: 1, status: "active" },
  { device_id: 202, name: "Air Purifier", room_id: 2, status: "inactive" },
  { device_id: 203, name: "Water Heater", room_id: 3, status: "active" }
]);


db.sensor_logs.insertMany([
  {
    log_id: 1,
    device_id: 201,
    timestamp: ISODate("2025-07-22T07:30:00Z"),
    energy_kwh: 0.7,
    voltage: 230,
    current: 3.2,
    room: "Study Room"
  },
  {
    log_id: 2,
    device_id: 202,
    timestamp: ISODate("2025-07-22T08:45:00Z"),
    energy_kwh: 1.9,
    voltage: 230,
    current: 4.8,
    room: "Guest Room"
  },
  {
    log_id: 3,
    device_id: 203,
    timestamp: ISODate("2025-07-22T10:10:00Z"),
    energy_kwh: 2.2,
    voltage: 230,
    current: 9.1,
    room: "Bathroom"
  }
]);


db.devices.aggregate([
  {
    $lookup: {
      from: "rooms",
      localField: "room_id",
      foreignField: "room_id",
      as: "room_info"
    }
  },
  { $unwind: "$room_info" },
  {
    $project: {
      _id: 0,
      device_id: 1,
      name: 1,
      status: 1,
      room_name: "$room_info.name"
    }
  }
]);


db.sensor_logs.aggregate([
  {
    $group: {
      _id: "$device_id",
      total_energy: { $sum: "$energy_kwh" }
    }
  }
]);


db.sensor_logs.aggregate([
  {
    $project: {
      room: 1,
      energy_kwh: 1,
      day: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp" } }
    }
  },
  {
    $group: {
      _id: { room: "$room", day: "$day" },
      total_energy: { $sum: "$energy_kwh" }
    }
  },
  {
    $sort: { "_id.day": 1 }
  }
]);
