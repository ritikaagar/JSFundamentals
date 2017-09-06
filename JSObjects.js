//Challenge#1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]


for (var i = 0; i < students.length; i++){
  console.log("Name:"+students[i].name);
  console.log("Cohort:"+students[i].cohort);
}