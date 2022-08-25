const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});
const cohortName = process.argv[2] || "JUL02";

const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort_id
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON students.id = assistance_requests.student_id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER BY teachers.name;`;
pool
  .query(queryString, [cohortName])
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.cohort_id} : ${user.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));
