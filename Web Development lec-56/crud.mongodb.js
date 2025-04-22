use("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name: "Faize Web Developer",
    email: "faize420khan@gmail.com",
    assignments: 12,
    projects: 30
    
})


// db.courses.insertMany(
//     [
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 7,
//           "projects": 28
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 15,
//           "projects": 32
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 9,
//           "projects": 25
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 13,
//           "projects": 29
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 11,
//           "projects": 30
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 6,
//           "projects": 33
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 10,
//           "projects": 26
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 14,
//           "projects": 31
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 8,
//           "projects": 27
//         },
//         {
//           "name": "Faize Web Developer",
//           "email": "faize420khan@gmail.com",
//           "assignments": 12,
//           "projects": 30
//         }
//       ]
      
// )

// let a = db.courses.find({assignments: 12})
// // console.log(a);
// console.log(a.count());


// let b = db.courses.findOne({assignments: 12})

// console.log(b);

//update

// db.courses.updateOne(
//     { email: "faize420khan@gmail.com" },
//     { $set: { email: "faizekhan@gmail.com" } }
//   )
  
// db.courses.updateMany(
//     { email: "faize420khan@gmail.com" },
//     { $set: { email: "faizekhan@gmail.com" } }
//   )


db.courses.deleteMany({email: "faizekhan@gmail.com"})