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