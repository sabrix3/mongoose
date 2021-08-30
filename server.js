const express = require("express");
const connectDB = require("./DB/connectDB")
const PersonDB = require ('./Model/model')

//- Person Prototype -

// const Person = new PersonDB({name:"Sabri", age:29, favoriteFoods:["Paella","Couscous"]})

// Save

// Person.save((err)=>{
//     if(err) return handleError(err)
// })

// Create Many

// const docs = PersonDB.create([
//     {name:"Cyrine",age:26,favoriteFoods:["Pasta","Pizza"]},
//     {name:"Usky",age:28,favoriteFoods:["Couscous","Burger"]}
//     {name:"Baebymama", age:30, favoriteFoods:["Lasagnes","Choucroute"]}
// ])


//Find All

// const searchAll = async()=>{
//     try {
// const data = await PersonDB.find({});
// console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// searchAll()


//Find One

// const searchOne = async()=>{
//     try {
//         const data = await PersonDB.findOne ({favoriteFoods:["Couscous","Burger"]});
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// searchOne()

//Find by ID

// const searchID = async()=>{
//     try {
//         const data = await PersonDB.findById({_id:"612657a44947c03759afe003"});
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// searchID()


// Classic Updates

// const classicUpdate = async()=>{
//     const Person = await PersonDB.findById({_id:"6126a4ebdba49e656c33e814"});
//     Person.favoriteFoods=["Pasta","Pizza","Hamburger"]
//     Person.save((err)=>{
//         if(err) return handleError(err)
//     })
// }
// classicUpdate()

// Updates Using model.findOneAndUpdate()

// const query={name:"Sabri"}
// const UpdatePerson = async()=>{
//     await PersonDB.findOneAndUpdate(query,{$set:{age:20}},{new:true, useFindAndModify: false}, (err,data)=>{
//         try {
//             console.log("updated")
//         } catch (err) {
//             console.log(err)
//         }
//     })
// }
// UpdatePerson()


// Delete One 

// const Remove = async()=>{
//   await PersonDB.findByIdAndRemove({_id:"61269ec0244db21e68a5d264"}, (err,data)=>{
//     try {
//       console.log("removed")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// Remove()


// Delete Many 

// const RemovePerson = async()=>{
//   const res = await PersonDB.remove({name:"Usky"}, (err,data) =>{
//     try {
//       console.log("removed Persons")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// RemovePerson()



// chain()
// const chain = async() => {
//    try {
//      const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "Pizza"}}}).sort({name: "Cyrine"}).limit(2).select({age: 0, __v: 0}).exec()
//          console.log(data)
//     } catch (err) {
//        console.error(err)
//     }
// }
// chain()


connectDB()

const app = express();

const PORT = 3000;

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    : console.log(`server is running in ${PORT}...`)
})





