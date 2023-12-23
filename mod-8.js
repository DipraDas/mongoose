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



// ! 8.3

// * It creates a new collection with a new field named salary
db.practice.aggregate([
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 100]
                    }
                }
            }
        }
    },
    { $out: "salarywithpractice" }
])



// ! 8.4

// * Merging in the same 
db.practice.aggregate([
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 100]
                    }
                }
            }
        }
    },
    { $merge: 'practice' }
])


// * Grouping based on one condition
db.practice.aggregate([
    {
        $group: { _id: "$gender" }
    }
])

// * Grouping based on more condition
db.practice.aggregate([
    {
        $group: {
            _id: {
                age: '$age',
                gender: '$gender'
            }
        }
    }
])


// ! 8.5

// * Grouping based on more condition and naming
db.practice.aggregate([
    {
        $group: {
            _id: '$salary',
            persons: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            salary: '$_id',
            persons: 1
        }
    },
    {
        $sort: { _id: 1 }
    }
])


// ! 8.6

// * Exploring Accumulator
db.practice.aggregate([
    {
        $group: {
            _id: null,
            count: { $sum: '$salary' },
            maxSalary: { $max: '$salary' },
            minSalary: { $min: '$salary' },
            avgSalary: { $avg: '$salary' }
        }
    },
    {
        $project: {
            count: 1,
            maxSalary: 1,
            minSalary: 1,
            avgSalary: 1,
            salaryRange: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
])


// ! 8.7

// * For extracting any data that are in and array of object
db.practice.aggregate([
    {
        $unwind: "$friends"
    },
    {
        $group: {
            _id: "$friends",
            count: { $sum: 1 }

        }
    }
])

// ! 8.8

// * Multi stage pipeline
db.practice.aggregate([
    {
        $match: { _id: ObjectId('6406ad63fc13ae5a40000064') }
    },
    {
        $facet: {
            'friendsCount': [
                { $project: { friendsCount: { $size: '$friends' } } }
            ],
            'interestsCount': [
                { $project: { interestsCount: { $size: '$interests' } } }
            ],
            'skillsCount': [
                { $project: { skillsCount: { $size: '$skills' } } }
            ],
        }
    }
])