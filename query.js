
// ! FIND ALL DOCUMENT
de.practice.find({})
de.practice.find({}).limit(10)


// ! CHECK WHERE THE FAVOURITE COLOR IS BLUE
db.practice.find({
    favoutiteColor: { $eq: 'Blue' }
})


// ! USING PROJECT THAT WILL SHOW ONLY THAT FIELD
db.practice.find({
    favoutiteColor: { $eq: 'Blue' }
})
    .project({ favoutiteColor: 1 })


// ! NOT EQUAL
db.practice.find({
    favoutiteColor: { $ne: 'Blue' }
})
    .project({ favoutiteColor: 1 })

// ? GREATER THAN $gt
// ? LESS THAN $lt
// ? GREATER THAN EQUAL $gte
// ? LESS THAN EQUAL $lte


// ! ASSENDING ORDER
db.practice.find({
    favoutiteColor: { $ne: 'Blue' }
})
    .sort({ age: 1 })
    .project({ age: 1 })


// ! DESENDING ORDER
db.practice.find({
    favoutiteColor: { $ne: 'Blue' }
})
    .sort({ age: -1 })
    .project({ age: 1 })


// ! IMPLICIT AND
db.practice.find({
    age: {
        $gte: 18,
        $lt: 30
    }
})
    .sort({ age: 1 })