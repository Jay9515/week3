function getObject(obj) {
  let uniqueMarks = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let entry = obj[key];

      if (
        entry.hasOwnProperty("age") &&
        entry.hasOwnProperty("name") &&
        entry.hasOwnProperty("marks")
      ) {
        let mark = entry.marks;

        if (!(mark in uniqueMarks) || entry.age < uniqueMarks[mark].age) {
          uniqueMarks[mark] = entry;
        }
      }
    }
  }

  let result = {};

  let index = 0;
  for (let mark in uniqueMarks) {
    if (uniqueMarks.hasOwnProperty(mark)) {
      result[index] = uniqueMarks[mark];
      index++;
    }
  }

  return result;
}

let example1 = {
  0: { age: 18, name: "jay", marks: "400" },
  1: { age: 17, name: "chetan", marks: "500" },
  2: { age: 16, name: "anirudh", marks: "200" },
  3: { age: 16, name: "kushal", marks: "300" },
  4: { age: 16, name: "ganesh", marks: "300" },
};

console.log(getObject(example1));

let example2 = {
  0: { age: 18, name: "mohan", marks: "400" },
  1: { age: 17, name: "surya", marks: "600" },
  2: { age: 16, name: "pandu", marks: "200" },
  3: { age: 14, name: "srinu", marks: "300" },
  4: { age: 19, name: "shiva", marks: "250" },
  5: { age: 15, name: "naresh", marks: "255" },
  6: { age: 15, name: "tulasi", marks: "250" },
};
console.log(getObject(example2));
