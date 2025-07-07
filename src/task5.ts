type stuType = [number, string];

let student: stuType = [454, "Jero"];

function log(stu: stuType) {
  let [id, name] = stu;
  console.log(`Student Name : ${name} \nStudent ID : ${id}`);
}

log(student);
