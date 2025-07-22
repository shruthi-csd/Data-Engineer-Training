use companyDB
switched to db companyDB
db["Fitness center database"].find()
db.members.insertMany([
  { member_id: 1, name: "Anjali Rao", age: 28, gender: "Female", city: "Mumbai", membership_type: "Gold" },
  { member_id: 2, name: "Rohan Mehta", age: 35, gender: "Male", city: "Delhi", membership_type: "Silver" },
  { member_id: 3, name: "Fatima Shaikh", age: 22, gender: "Female", city: "Hyderabad", membership_type: "Platinum" },
  { member_id: 4, name: "Vikram Das", age: 41, gender: "Male", city: "Bangalore", membership_type: "Gold" },
  { member_id: 5, name: "Neha Kapoor", age: 31, gender: "Female", city: "Pune", membership_type: "Silver" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1dee80ad1e4b5fed5432'),
    '1': ObjectId('687f1dee80ad1e4b5fed5433'),
    '2': ObjectId('687f1dee80ad1e4b5fed5434'),
    '3': ObjectId('687f1dee80ad1e4b5fed5435'),
    '4': ObjectId('687f1dee80ad1e4b5fed5436')
  }
}
db.trainers.insertMany([
  { trainer_id: 101, name: "Ajay Kumar", specialty: "Weight Training", experience: 7 },
  { trainer_id: 102, name: "Swati Nair", specialty: "Cardio", experience: 5 },
  { trainer_id: 103, name: "Imran Qureshi", specialty: "Yoga", experience: 8 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1dfa80ad1e4b5fed5437'),
    '1': ObjectId('687f1dfa80ad1e4b5fed5438'),
    '2': ObjectId('687f1dfa80ad1e4b5fed5439')
  }
}
db.sessions.insertMany([
  { session_id: 201, member_id: 1, trainer_id: 101, session_type: "Strength", duration: 60, date: new Date("2024-08-01") },
  { session_id: 202, member_id: 2, trainer_id: 102, session_type: "Cardio", duration: 45, date: new Date("2024-08-02") },
  { session_id: 203, member_id: 3, trainer_id: 103, session_type: "Yoga", duration: 90, date: new Date("2024-08-03") },
  { session_id: 204, member_id: 1, trainer_id: 102, session_type: "Cardio", duration: 30, date: new Date("2024-08-04") },
  { session_id: 205, member_id: 4, trainer_id: 101, session_type: "Strength", duration: 75, date: new Date("2024-08-05") },
  { session_id: 206, member_id: 5, trainer_id: 103, session_type: "Yoga", duration: 60, date: new Date("2024-08-05") }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1e0280ad1e4b5fed543a'),
    '1': ObjectId('687f1e0280ad1e4b5fed543b'),
    '2': ObjectId('687f1e0280ad1e4b5fed543c'),
    '3': ObjectId('687f1e0280ad1e4b5fed543d'),
    '4': ObjectId('687f1e0280ad1e4b5fed543e'),
    '5': ObjectId('687f1e0280ad1e4b5fed543f')
  }
}
db.members.find({ city: "Mumbai" })
{
  _id: ObjectId('687f1dee80ad1e4b5fed5432'),
  member_id: 1,
  name: 'Anjali Rao',
  age: 28,
  gender: 'Female',
  city: 'Mumbai',
  membership_type: 'Gold'
}
db.trainers.find({ experience: { $gt: 6 } })
{
  _id: ObjectId('687f1dfa80ad1e4b5fed5437'),
  trainer_id: 101,
  name: 'Ajay Kumar',
  specialty: 'Weight Training',
  experience: 7
}
{
  _id: ObjectId('687f1dfa80ad1e4b5fed5439'),
  trainer_id: 103,
  name: 'Imran Qureshi',
  specialty: 'Yoga',
  experience: 8
}
db.sessions.find({ session_type: "Yoga" })
{
  _id: ObjectId('687f1e0280ad1e4b5fed543c'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543f'),
  session_id: 206,
  member_id: 5,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 60,
  date: 2024-08-05T00:00:00.000Z
}
const trainer = db.trainers.findOne({ name: "Swati Nair" })
db.sessions.find({ trainer_id: trainer.trainer_id })
{
  _id: ObjectId('687f1e0280ad1e4b5fed543b'),
  session_id: 202,
  member_id: 2,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 45,
  date: 2024-08-02T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543d'),
  session_id: 204,
  member_id: 1,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 30,
  date: 2024-08-04T00:00:00.000Z
}
const sessions = db.sessions.find({ date: new Date("2024-08-05") }).toArray()
const memberIds = sessions.map(s => s.member_id)
db.members.find({ member_id: { $in: memberIds } })
{
  _id: ObjectId('687f1dee80ad1e4b5fed5435'),
  member_id: 4,
  name: 'Vikram Das',
  age: 41,
  gender: 'Male',
  city: 'Bangalore',
  membership_type: 'Gold'
}
{
  _id: ObjectId('687f1dee80ad1e4b5fed5436'),
  member_id: 5,
  name: 'Neha Kapoor',
  age: 31,
  gender: 'Female',
  city: 'Pune',
  membership_type: 'Silver'
}
db.sessions.aggregate([
  { $group: { _id: "$member_id", session_count: { $sum: 1 } } }
])
{
  _id: 3,
  session_count: 1
}
{
  _id: 1,
  session_count: 2
}
{
  _id: 4,
  session_count: 1
}
{
  _id: 2,
  session_count: 1
}
{
  _id: 5,
  session_count: 1
}
db.sessions.aggregate([
  { $group: { _id: "$session_type", avg_duration: { $avg: "$duration" } } }
])
{
  _id: 'Strength',
  avg_duration: 67.5
}
{
  _id: 'Cardio',
  avg_duration: 37.5
}
{
  _id: 'Yoga',
  avg_duration: 75
}
db.sessions.aggregate([
  { $group: { _id: "$session_type", avg_duration: { $avg: "$duration" } } }
])
{
  _id: 'Cardio',
  avg_duration: 37.5
}
{
  _id: 'Yoga',
  avg_duration: 75
}
{
  _id: 'Strength',
  avg_duration: 67.5
}
const femaleMembers = db.members.find({ gender: "Female" }).toArray()
const femaleIds = femaleMembers.map(m => m.member_id)
db.sessions.find({ member_id: { $in: femaleIds }, duration: { $gt: 60 } })
{
  _id: ObjectId('687f1e0280ad1e4b5fed543c'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z
}
db.sessions.find().sort({ duration: -1 })
{
  _id: ObjectId('687f1e0280ad1e4b5fed543c'),
  session_id: 203,
  member_id: 3,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543e'),
  session_id: 205,
  member_id: 4,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 75,
  date: 2024-08-05T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543a'),
  session_id: 201,
  member_id: 1,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 60,
  date: 2024-08-01T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543f'),
  session_id: 206,
  member_id: 5,
  trainer_id: 103,
  session_type: 'Yoga',
  duration: 60,
  date: 2024-08-05T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543b'),
  session_id: 202,
  member_id: 2,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 45,
  date: 2024-08-02T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543d'),
  session_id: 204,
  member_id: 1,
  trainer_id: 102,
  session_type: 'Cardio',
  duration: 30,
  date: 2024-08-04T00:00:00.000Z
}
db.sessions.aggregate([
  {
    $group: {
      _id: "$member_id",
      trainer_set: { $addToSet: "$trainer_id" }
    }
  },
  { $project: { trainer_count: { $size: "$trainer_set" }, member_id: "$_id" } },
  { $match: { trainer_count: { $gt: 1 } } }
])
{
  _id: 1,
  trainer_count: 2,
  member_id: 1
}
db.sessions.aggregate([
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $lookup: {
      from: "trainers",
      localField: "trainer_id",
      foreignField: "trainer_id",
      as: "trainer"
    }
  },
  { $unwind: "$trainer" },
  {
    $project: {
      session_id: 1,
      session_type: 1,
      duration: 1,
      date: 1,
      member_name: "$member.name",
      trainer_name: "$trainer.name"
    }
  }
])
{
  _id: ObjectId('687f1e0280ad1e4b5fed543a'),
  session_id: 201,
  session_type: 'Strength',
  duration: 60,
  date: 2024-08-01T00:00:00.000Z,
  member_name: 'Anjali Rao',
  trainer_name: 'Ajay Kumar'
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543b'),
  session_id: 202,
  session_type: 'Cardio',
  duration: 45,
  date: 2024-08-02T00:00:00.000Z,
  member_name: 'Rohan Mehta',
  trainer_name: 'Swati Nair'
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543c'),
  session_id: 203,
  session_type: 'Yoga',
  duration: 90,
  date: 2024-08-03T00:00:00.000Z,
  member_name: 'Fatima Shaikh',
  trainer_name: 'Imran Qureshi'
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543d'),
  session_id: 204,
  session_type: 'Cardio',
  duration: 30,
  date: 2024-08-04T00:00:00.000Z,
  member_name: 'Anjali Rao',
  trainer_name: 'Swati Nair'
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543e'),
  session_id: 205,
  session_type: 'Strength',
  duration: 75,
  date: 2024-08-05T00:00:00.000Z,
  member_name: 'Vikram Das',
  trainer_name: 'Ajay Kumar'
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543f'),
  session_id: 206,
  session_type: 'Yoga',
  duration: 60,
  date: 2024-08-05T00:00:00.000Z,
  member_name: 'Neha Kapoor',
  trainer_name: 'Imran Qureshi'
}
db.sessions.aggregate([
  { $group: { _id: "$trainer_id", total_duration: { $sum: "$duration" } } }
])
{
  _id: 101,
  total_duration: 135
}
{
  _id: 103,
  total_duration: 150
}
{
  _id: 102,
  total_duration: 75
}
db.sessions.aggregate([
  { $group: { _id: "$member_id", total_time: { $sum: "$duration" } } }
])
{
  _id: 3,
  total_time: 90
}
{
  _id: 1,
  total_time: 90
}
{
  _id: 4,
  total_time: 75
}
{
  _id: 2,
  total_time: 45
}
{
  _id: 5,
  total_time: 60
}
db.sessions.aggregate([
  { $group: { _id: "$trainer_id", session_count: { $sum: 1 } } }
])
{
  _id: 102,
  session_count: 2
}
{
  _id: 103,
  session_count: 2
}
{
  _id: 101,
  session_count: 2
}
db.sessions.aggregate([
  { $group: { _id: "$trainer_id", avg_duration: { $avg: "$duration" } } },
  { $sort: { avg_duration: -1 } },
  { $limit: 1 }
])
{
  _id: 103,
  avg_duration: 75
}
db.sessions.aggregate([
  { $group: { _id: "$trainer_id", members: { $addToSet: "$member_id" } } },
  { $project: { unique_members: { $size: "$members" } } }
])
{
  _id: 101,
  unique_members: 2
}
{
  _id: 103,
  unique_members: 2
}
{
  _id: 102,
  unique_members: 2
}
db.sessions.aggregate([
  { $group: { _id: "$member_id", total_time: { $sum: "$duration" } } },
  { $sort: { total_time: -1 } },
  { $limit: 1 }
])
{
  _id: 3,
  total_time: 90
}
const goldMembers = db.members.find({ membership_type: "Gold" }).toArray()
const goldIds = goldMembers.map(m => m.member_id)
db.sessions.find({ member_id: { $in: goldIds }, session_type: "Strength" })
{
  _id: ObjectId('687f1e0280ad1e4b5fed543a'),
  session_id: 201,
  member_id: 1,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 60,
  date: 2024-08-01T00:00:00.000Z
}
{
  _id: ObjectId('687f1e0280ad1e4b5fed543e'),
  session_id: 205,
  member_id: 4,
  trainer_id: 101,
  session_type: 'Strength',
  duration: 75,
  date: 2024-08-05T00:00:00.000Z
}
db.sessions.aggregate([
  {
    $lookup: {
      from: "members",
      localField: "member_id",
      foreignField: "member_id",
      as: "member"
    }
  },
  { $unwind: "$member" },
  {
    $group: {
      _id: "$member.membership_type",
      session_count: { $sum: 1 }
    }
  }
])
{
  _id: 'Gold',
  session_count: 3
}
{
  _id: 'Platinum',
  session_count: 1
}
{
  _id: 'Silver',
  session_count: 2
}
// Add a new member
db.members.insertOne({ member_id: 6, name: "Arjun Patel", age: 29, gender: "Male", city: "Kolkata", membership_type: "Silver" })

// Find members not in any session
db.members.aggregate([
  {
    $lookup: {
      from: "sessions",
      localField: "member_id",
      foreignField: "member_id",
      as: "session_info"
    }
  },
  { $match: { session_info: { $eq: [] } } }
])
