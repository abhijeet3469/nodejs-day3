// e.g. 1.
// const abhijeet = {
//     name: "Abhijeet",
//     age: "25",
//     email: "abhijeet3469@gmail.com",
//     contact: "8816822564",
//     course: "MERN Stack",
//     date: "07-01-2022"
// }

// module.exports = abhijeet; // export the data variable out of this file.
// or
// exports.amit=abhijeet;

// e.g. 2.

// const user = {
// json1: {name: "Abhijeet", age: "25", email: "abhijeet3469@gmail.com", contact: "8816822564", course: "MERN Stack", date: "07-01-2022"},
// json2: {name: "Vicky", age: "26", email: "vicky123@gmail.com", contact: "9896057158", course: "MEAN Stack", date: "07-02-2022"},
// }

// module.exports = user;  // -------> 1
// exports.users=user; // --------> 2

// e.g. 3
// const data = {
//     students: [{name: "Abhijeet", rollno: "11", course: "B.Tech CSE"}, {name: "Amit", rollno: "17", course: "BCA"}],

//     teachers: [{name: "Dr RK Garg", Department: "Chemistry"}, {name: "Neeru Jawa", Department: "English"}]
// }
// module.exports=data; // 1.  it is always a good practise to use module.exports
// exports.userData = data;  //-->2.

// e.g. 4.
// const students = [
//     { name: "Abhijeet", rollno: "11" },
//     { name: "Sandeep", rollno: "12" },
// ]
// const teachers = [
//     {name: "Dr RK Garg", Department: "Chemistry"}, 
//     {name: "Neeru Jawa", Department: "English"},
// ]
// one way to export-
// exports.students=students;
// exports.teachers=teachers;
// second way to export
// module.exports = {
//     students: students,
//     teachers: teachers
// }

// e.g. 5.
// const students = [
//     { name: "Abhijeet", rollno: "11" },
//     { name: "Vicky", rollno: "12" },
// ]
// const teachers = [
//     {name: "Dr RK Garg", Department: "Chemistry"}, 
//     {name: "Neeru Jawa", Department: "English"},
// ]
// const sumFunction = function(a,b){
//     return a + b;
// }
// exports.students=students;
// exports.teachers=teachers;
// exports.add=sumFunction;

// or

// module.exports = {
//     students: students,
//     teachers: teachers,
//     add: sumFunction
// }