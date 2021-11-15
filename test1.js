/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 *
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 1, name: "Adi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 5, name: "Surya" },
    class: { class_id: 3, name: "C" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 8, name: "Edi" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 7, name: "Dede" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 3, name: "Bayu" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 2, name: "Budi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 4, name: "Dharma" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 3, name: "Maha" },
    class: { class_id: 3, name: "C" },
  },
];

function result(sessions) {
  var output = [];

  sessions.forEach(function (item) {
    var existing = output.filter(function (v) {
      return v.session_id == item.session_id;
    });

    if (existing.length) {
      var existingIndex = output.indexOf(existing[0]);

      var existingClass = output[existingIndex].classes.filter(function (v) {
        return v.class_id == item.class.class_id;
      });

      if (!existingClass.length) {
        output[existingIndex].classes.push({
          ...item.class,
          students: [{ ...item.student }],
        });
      } else {
        var existingClassIndex = output[existingIndex].classes.indexOf(
          existingClass[0]
        );

        var existingStudent = output[existingIndex].classes[
          existingClassIndex
        ].students.filter(function (v) {
          return v.student_id == item.student.student_id;
        });

        if (!existingStudent.length) {
          output[existingIndex].classes[existingClassIndex].students.push(
            item.student
          );
        }
      }
    } else {
      output.push({
        session_id: item.session_id,
        time: item.time,
        classes: [{ ...item.class, students: [{ ...item.student }] }],
      });
    }
  });
  return output;
}
console.log(result(sessions));
