function students(){
var students = [
  {first_name:  'Michael', last_name : 'Jordan'},
  {first_name : 'John', last_name : 'Rosales'},
  {first_name : 'Mark', last_name : 'Guillen'},
  {first_name : 'KB', last_name : 'Tonel'}
];
//console.log(students.length); for debugging
for (var num = 0; num < students.length; num++){
  console.log((students[num].first_name), (students[num].last_name));
};
}
students()
