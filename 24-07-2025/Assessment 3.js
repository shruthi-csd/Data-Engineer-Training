use companyDB
switched to db companyDB
db["Job portal"].find()
db.jobs.insertMany([
  { _id: 1, title: "Software Engineer", company: "TechCorp", location: "Bangalore", salary: 1200000, job_type: "remote", posted_on: new Date("2025-07-01") },
  { _id: 2, title: "Data Analyst", company: "DataPlus", location: "Hyderabad", salary: 900000, job_type: "on-site", posted_on: new Date("2025-06-15") },
  { _id: 3, title: "DevOps Engineer", company: "InfraTech", location: "Pune", salary: 1300000, job_type: "hybrid", posted_on: new Date("2025-07-05") },
  { _id: 4, title: "Backend Developer", company: "TechCorp", location: "Chennai", salary: 1150000, job_type: "remote", posted_on: new Date("2025-07-20") },
  { _id: 5, title: "UI/UX Designer", company: "CreativeEdge", location: "Mumbai", salary: 850000, job_type: "on-site", posted_on: new Date("2025-06-10") }
])
{
  acknowledged: true,
  insertedIds: {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    '4': 5
  }
}
db.applicants.insertMany([
  { _id: 1, name: "Shruthi R", skills: ["Python", "MongoDB", "React"], experience: 2, city: "Hyderabad", applied_on: new Date("2025-07-01") },
  { _id: 2, name: "Arjun Mehta", skills: ["Java", "SQL"], experience: 3, city: "Mumbai", applied_on: new Date("2025-07-02") },
  { _id: 3, name: "Nisha Rao", skills: ["HTML", "CSS", "MongoDB"], experience: 1, city: "Bangalore", applied_on: new Date("2025-07-03") },
  { _id: 4, name: "Rahul Das", skills: ["Python", "Node.js"], experience: 4, city: "Hyderabad", applied_on: new Date("2025-07-05") },
  { _id: 5, name: "Divya Patel", skills: ["JavaScript", "MongoDB", "Vue"], experience: 2, city: "Chennai", applied_on: new Date("2025-07-04") }
])
{
  acknowledged: true,
  insertedIds: {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    '4': 5
  }
}
db.applications.insertMany([
  { applicant_id: 1, job_id: 1, application_status: "applied", interview_scheduled: false, feedback: null },
  { applicant_id: 1, job_id: 3, application_status: "interview scheduled", interview_scheduled: true, feedback: null },
  { applicant_id: 2, job_id: 2, application_status: "rejected", interview_scheduled: false, feedback: "Lack of experience" },
  { applicant_id: 3, job_id: 4, application_status: "interview scheduled", interview_scheduled: true, feedback: null },
  { applicant_id: 4, job_id: 1, application_status: "applied", interview_scheduled: false, feedback: null },
  { applicant_id: 5, job_id: 1, application_status: "applied", interview_scheduled: false, feedback: null }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6881bea7ba9e451b7e344019'),
    '1': ObjectId('6881bea7ba9e451b7e34401a'),
    '2': ObjectId('6881bea7ba9e451b7e34401b'),
    '3': ObjectId('6881bea7ba9e451b7e34401c'),
    '4': ObjectId('6881bea7ba9e451b7e34401d'),
    '5': ObjectId('6881bea7ba9e451b7e34401e')
  }
}
db.jobs.find({ job_type: "remote", salary: { $gt: 1000000 } })
{
  _id: 1,
  title: 'Software Engineer',
  company: 'TechCorp',
  location: 'Bangalore',
  salary: 1200000,
  job_type: 'remote',
  posted_on: 2025-07-01T00:00:00.000Z
}
{
  _id: 4,
  title: 'Backend Developer',
  company: 'TechCorp',
  location: 'Chennai',
  salary: 1150000,
  job_type: 'remote',
  posted_on: 2025-07-20T00:00:00.000Z
}
db.applicants.find({ skills: "MongoDB" })
{
  _id: 1,
  name: 'Shruthi R',
  skills: [
    'Python',
    'MongoDB',
    'React'
  ],
  experience: 2,
  city: 'Hyderabad',
  applied_on: 2025-07-01T00:00:00.000Z
}
{
  _id: 3,
  name: 'Nisha Rao',
  skills: [
    'HTML',
    'CSS',
    'MongoDB'
  ],
  experience: 1,
  city: 'Bangalore',
  applied_on: 2025-07-03T00:00:00.000Z
}
{
  _id: 5,
  name: 'Divya Patel',
  skills: [
    'JavaScript',
    'MongoDB',
    'Vue'
  ],
  experience: 2,
  city: 'Chennai',
  applied_on: 2025-07-04T00:00:00.000Z
}
db.jobs.countDocuments({
  posted_on: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
})
3
db.applications.find({ application_status: "interview scheduled" })
{
  _id: ObjectId('6881bea7ba9e451b7e34401a'),
  applicant_id: 1,
  job_id: 3,
  application_status: 'interview scheduled',
  interview_scheduled: true,
  feedback: null
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401c'),
  applicant_id: 3,
  job_id: 4,
  application_status: 'interview scheduled',
  interview_scheduled: true,
  feedback: null
}
db.jobs.aggregate([
  { $group: { _id: "$company", count: { $sum: 1 } } },
  { $match: { count: { $gt: 2 } } }
])
db.applications.aggregate([
  {
    $lookup: {
      from: "jobs",
      localField: "job_id",
      foreignField: "_id",
      as: "jobDetails"
    }
  },
  {
    $lookup: {
      from: "applicants",
      localField: "applicant_id",
      foreignField: "_id",
      as: "applicantDetails"
    }
  },
  {
    $project: {
      job_title: { $arrayElemAt: ["$jobDetails.title", 0] },
      applicant_name: { $arrayElemAt: ["$applicantDetails.name", 0] }
    }
  }
])
{
  _id: ObjectId('6881bea7ba9e451b7e344019'),
  job_title: 'Software Engineer',
  applicant_name: 'Shruthi R'
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401a'),
  job_title: 'DevOps Engineer',
  applicant_name: 'Shruthi R'
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401b'),
  job_title: 'Data Analyst',
  applicant_name: 'Arjun Mehta'
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401c'),
  job_title: 'Backend Developer',
  applicant_name: 'Nisha Rao'
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401d'),
  job_title: 'Software Engineer',
  applicant_name: 'Rahul Das'
}
{
  _id: ObjectId('6881bea7ba9e451b7e34401e'),
  job_title: 'Software Engineer',
  applicant_name: 'Divya Patel'
}
db.applications.aggregate([
  { $group: { _id: "$job_id", total_applications: { $sum: 1 } } }
])
{
  _id: 1,
  total_applications: 3
}
{
  _id: 3,
  total_applications: 1
}
{
  _id: 2,
  total_applications: 1
}
{
  _id: 4,
  total_applications: 1
}
db.applications.aggregate([
  { $group: { _id: "$applicant_id", count: { $sum: 1 } } },
  { $match: { count: { $gt: 1 } } }
])
{
  _id: 1,
  count: 2
}
db.applicants.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 3 }
])
{
  _id: 'Hyderabad',
  total: 2
}
{
  _id: 'Chennai',
  total: 1
}
{
  _id: 'Mumbai',
  total: 1
}
db.jobs.aggregate([
  { $group: { _id: "$job_type", avg_salary: { $avg: "$salary" } } }
])
{
  _id: 'hybrid',
  avg_salary: 1300000
}
{
  _id: 'remote',
  avg_salary: 1175000
}
{
  _id: 'on-site',
  avg_salary: 875000
}
db.applications.updateOne(
  { application_status: "interview scheduled" },
  { $set: { application_status: "offer made" } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.jobs.find().forEach(job => {
  const appCount = db.applications.countDocuments({ job_id: job._id })
  if (appCount === 0) {
    db.jobs.deleteOne({ _id: job._id })
  }
})
db.applications.updateMany({}, { $set: { shortlisted: false } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 6,
  modifiedCount: 6,
  upsertedCount: 0
}
db.applicants.updateMany({ city: "Hyderabad" }, { $inc: { experience: 1 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
const appliedIds = db.applications.distinct("applicant_id")
db.applicants.deleteMany({ _id: { $nin: appliedIds } })
