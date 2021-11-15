/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "adi" }] },
    ],
  },
];

function result(data) {
  return data.map((v) => {
    return loopThrough(v);
  });
}

function loopThrough(data) {
  if (typeof data === "object" && data) {
    Object.keys(data).forEach((e) => {
      if (typeof data[e] === "object") loopThrough(data[e]);
      else if (!data[e]) delete data[e];
    });
  }
  return data;
}

console.log(result(data));
