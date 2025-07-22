use companyDB
switched to db companyDB
db["moviesdb"].find()
use movieDB

db.createCollection("users")
db.createCollection("movies")
db.createCollection("watch_history")
switched to db movieDB
db.users.insertMany([
  { user_id: 1, name: "Aarav Mehta", email: "aarav@example.com", country: "India" },
  { user_id: 2, name: "Liam Smith", email: "liam@example.com", country: "USA" },
  { user_id: 3, name: "Sophia Zhang", email: "sophia@example.com", country: "China" },
  { user_id: 4, name: "Carlos Ruiz", email: "carlos@example.com", country: "Mexico" },
  { user_id: 5, name: "Meena Reddy", email: "meena@example.com", country: "India" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1b316382fb541a028160'),
    '1': ObjectId('687f1b316382fb541a028161'),
    '2': ObjectId('687f1b316382fb541a028162'),
    '3': ObjectId('687f1b316382fb541a028163'),
    '4': ObjectId('687f1b316382fb541a028164')
  }
}
db.movies.insertMany([
  { movie_id: 201, title: "Dream Beyond Code", genre: "Sci-Fi", release_year: 2022, duration: 120 },
  { movie_id: 202, title: "Whispers in the Dark", genre: "Horror", release_year: 2019, duration: 95 },
  { movie_id: 203, title: "The Untold Truth", genre: "Documentary", release_year: 2021, duration: 85 },
  { movie_id: 204, title: "Rhythm of Love", genre: "Romance", release_year: 2023, duration: 110 },
  { movie_id: 205, title: "Code Warriors", genre: "Action", release_year: 2020, duration: 130 },
  { movie_id: 206, title: "Zen Life", genre: "Drama", release_year: 2022, duration: 100 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1b496382fb541a028165'),
    '1': ObjectId('687f1b496382fb541a028166'),
    '2': ObjectId('687f1b496382fb541a028167'),
    '3': ObjectId('687f1b496382fb541a028168'),
    '4': ObjectId('687f1b496382fb541a028169'),
    '5': ObjectId('687f1b496382fb541a02816a')
  }
}
db.watch_history.insertMany([
  { watch_id: 301, user_id: 1, movie_id: 201, watched_on: ISODate("2024-03-15"), watch_time: 100 },
  { watch_id: 302, user_id: 2, movie_id: 202, watched_on: ISODate("2024-03-20"), watch_time: 90 },
  { watch_id: 303, user_id: 3, movie_id: 203, watched_on: ISODate("2024-04-01"), watch_time: 85 },
  { watch_id: 304, user_id: 1, movie_id: 204, watched_on: ISODate("2024-04-02"), watch_time: 110 },
  { watch_id: 305, user_id: 5, movie_id: 201, watched_on: ISODate("2024-04-03"), watch_time: 120 },
  { watch_id: 306, user_id: 4, movie_id: 205, watched_on: ISODate("2024-04-04"), watch_time: 100 },
  { watch_id: 307, user_id: 1, movie_id: 201, watched_on: ISODate("2024-04-05"), watch_time: 120 }, // repeat
  { watch_id: 308, user_id: 5, movie_id: 206, watched_on: ISODate("2024-04-06"), watch_time: 100 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('687f1b526382fb541a02816b'),
    '1': ObjectId('687f1b526382fb541a02816c'),
    '2': ObjectId('687f1b526382fb541a02816d'),
    '3': ObjectId('687f1b526382fb541a02816e'),
    '4': ObjectId('687f1b526382fb541a02816f'),
    '5': ObjectId('687f1b526382fb541a028170'),
    '6': ObjectId('687f1b526382fb541a028171'),
    '7': ObjectId('687f1b526382fb541a028172')
  }
}
db.movies.find({ duration: { $gt: 100 } })
{
  _id: ObjectId('687f1b496382fb541a028165'),
  movie_id: 201,
  title: 'Dream Beyond Code',
  genre: 'Sci-Fi',
  release_year: 2022,
  duration: 120
}
{
  _id: ObjectId('687f1b496382fb541a028168'),
  movie_id: 204,
  title: 'Rhythm of Love',
  genre: 'Romance',
  release_year: 2023,
  duration: 110
}
{
  _id: ObjectId('687f1b496382fb541a028169'),
  movie_id: 205,
  title: 'Code Warriors',
  genre: 'Action',
  release_year: 2020,
  duration: 130
}
db.users.find({ country: "India" })
{
  _id: ObjectId('687f1b316382fb541a028160'),
  user_id: 1,
  name: 'Aarav Mehta',
  email: 'aarav@example.com',
  country: 'India'
}
{
  _id: ObjectId('687f1b316382fb541a028164'),
  user_id: 5,
  name: 'Meena Reddy',
  email: 'meena@example.com',
  country: 'India'
}
db.movies.find({ release_year: { $gt: 2020 } })
{
  _id: ObjectId('687f1b496382fb541a028165'),
  movie_id: 201,
  title: 'Dream Beyond Code',
  genre: 'Sci-Fi',
  release_year: 2022,
  duration: 120
}
{
  _id: ObjectId('687f1b496382fb541a028167'),
  movie_id: 203,
  title: 'The Untold Truth',
  genre: 'Documentary',
  release_year: 2021,
  duration: 85
}
{
  _id: ObjectId('687f1b496382fb541a028168'),
  movie_id: 204,
  title: 'Rhythm of Love',
  genre: 'Romance',
  release_year: 2023,
  duration: 110
}
{
  _id: ObjectId('687f1b496382fb541a02816a'),
  movie_id: 206,
  title: 'Zen Life',
  genre: 'Drama',
  release_year: 2022,
  duration: 100
}
db.watch_history.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "user_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      _id: 0,
      user_name: "$user.name",
      movie_title: "$movie.title",
      watch_time: 1,
      watched_on: 1
    }
  }
])
{
  watched_on: 2024-03-15T00:00:00.000Z,
  watch_time: 100,
  user_name: 'Aarav Mehta',
  movie_title: 'Dream Beyond Code'
}
{
  watched_on: 2024-03-20T00:00:00.000Z,
  watch_time: 90,
  user_name: 'Liam Smith',
  movie_title: 'Whispers in the Dark'
}
{
  watched_on: 2024-04-01T00:00:00.000Z,
  watch_time: 85,
  user_name: 'Sophia Zhang',
  movie_title: 'The Untold Truth'
}
{
  watched_on: 2024-04-02T00:00:00.000Z,
  watch_time: 110,
  user_name: 'Aarav Mehta',
  movie_title: 'Rhythm of Love'
}
{
  watched_on: 2024-04-03T00:00:00.000Z,
  watch_time: 120,
  user_name: 'Meena Reddy',
  movie_title: 'Dream Beyond Code'
}
{
  watched_on: 2024-04-04T00:00:00.000Z,
  watch_time: 100,
  user_name: 'Carlos Ruiz',
  movie_title: 'Code Warriors'
}
{
  watched_on: 2024-04-05T00:00:00.000Z,
  watch_time: 120,
  user_name: 'Aarav Mehta',
  movie_title: 'Dream Beyond Code'
}
{
  watched_on: 2024-04-06T00:00:00.000Z,
  watch_time: 100,
  user_name: 'Meena Reddy',
  movie_title: 'Zen Life'
}
db.watch_history.aggregate([
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $group: {
      _id: "$movie.genre",
      watch_count: { $sum: 1 }
    }
  },
  {
    $project: {
      genre: "$_id",
      watch_count: 1,
      _id: 0
    }
  }
])
{
  watch_count: 1,
  genre: 'Romance'
}
{
  watch_count: 1,
  genre: 'Horror'
}
{
  watch_count: 3,
  genre: 'Sci-Fi'
}
{
  watch_count: 1,
  genre: 'Documentary'
}
{
  watch_count: 1,
  genre: 'Action'
}
{
  watch_count: 1,
  genre: 'Drama'
}
db.watch_history.aggregate([
  {
    $group: {
      _id: "$user_id",
      total_watch_time: { $sum: "$watch_time" }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "user_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $project: {
      user_name: "$user.name",
      total_watch_time: 1,
      _id: 0
    }
  }
])
{
  total_watch_time: 90,
  user_name: 'Liam Smith'
}
{
  total_watch_time: 100,
  user_name: 'Carlos Ruiz'
}
{
  total_watch_time: 330,
  user_name: 'Aarav Mehta'
}
{
  total_watch_time: 220,
  user_name: 'Meena Reddy'
}
{
  total_watch_time: 85,
  user_name: 'Sophia Zhang'
}
db.watch_history.aggregate([
  {
    $group: {
      _id: "$movie_id",
      watch_count: { $sum: 1 }
    }
  },
  { $sort: { watch_count: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "movies",
      localField: "_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      movie_title: "$movie.title",
      watch_count: 1,
      _id: 0
    }
  }
])
{
  watch_count: 3,
  movie_title: 'Dream Beyond Code'
}
db.watch_history.aggregate([
  {
    $group: {
      _id: { user_id: "$user_id", movie_id: "$movie_id" }
    }
  },
  {
    $group: {
      _id: "$_id.user_id",
      unique_movies: { $sum: 1 }
    }
  },
  { $match: { unique_movies: { $gt: 2 } } },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "user_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $project: {
      user_name: "$user.name",
      unique_movies: 1,
      _id: 0
    }
  }
])
db.watch_history.aggregate([
  {
    $group: {
      _id: { user_id: "$user_id", movie_id: "$movie_id" },
      watch_count: { $sum: 1 }
    }
  },
  { $match: { watch_count: { $gt: 1 } } },
  {
    $lookup: {
      from: "users",
      localField: "_id.user_id",
      foreignField: "user_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $lookup: {
      from: "movies",
      localField: "_id.movie_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      user_name: "$user.name",
      movie_title: "$movie.title",
      watch_count: 1,
      _id: 0
    }
  }
])
{
  watch_count: 2,
  user_name: 'Aarav Mehta',
  movie_title: 'Dream Beyond Code'
}
db.watch_history.aggregate([
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "movie_id",
      as: "movie"
    }
  },
  { $unwind: "$movie" },
  {
    $project: {
      _id: 0,
      movie_title: "$movie.title",
      user_id: 1,
      watch_time: 1,
      duration: "$movie.duration",
      percentage_watched: {
        $multiply: [{ $divide: ["$watch_time", "$movie.duration"] }, 100]
      }
    }
  }
])
{
  user_id: 1,
  watch_time: 100,
  movie_title: 'Dream Beyond Code',
  duration: 120,
  percentage_watched: 83.33333333333334
}
{
  user_id: 2,
  watch_time: 90,
  movie_title: 'Whispers in the Dark',
  duration: 95,
  percentage_watched: 94.73684210526315
}
{
  user_id: 3,
  watch_time: 85,
  movie_title: 'The Untold Truth',
  duration: 85,
  percentage_watched: 100
}
{
  user_id: 1,
  watch_time: 110,
  movie_title: 'Rhythm of Love',
  duration: 110,
  percentage_watched: 100
}
{
  user_id: 5,
  watch_time: 120,
  movie_title: 'Dream Beyond Code',
  duration: 120,
  percentage_watched: 100
}
{
  user_id: 4,
  watch_time: 100,
  movie_title: 'Code Warriors',
  duration: 130,
  percentage_watched: 76.92307692307693
}
{
  user_id: 1,
  watch_time: 120,
  movie_title: 'Dream Beyond Code',
  duration: 120,
  percentage_watched: 100
}
