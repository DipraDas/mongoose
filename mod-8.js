// ! 8.2

// ? find = match

// * CORRECT
// * U must set the match before the project if the project properperty not in the match.
db.practice.aggregate([
    { $match: { gender: 'Male', age: { $gt: 30 } } },
    { $project: { gender: 1, age: true } }
])

// * INCORRECT
db.practice.aggregate([
    { $project: { gender: 1, age: true } },
    { $match: { favouriteColor: 'Indigo' } }
])
