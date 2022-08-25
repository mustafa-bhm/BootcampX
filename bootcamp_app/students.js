const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

// LIMIT ${limitToShow}
const cohortName = process.argv[2];
const limitToShow = process.argv[3] || 5;
const values = [`%${cohortName}%`, limitToShow];

const queryString = `SELECT students.id , students.name , cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.id
WHERE cohorts.name ILIKE $1
LIMIT $2 ;
`;
pool
  .query(queryString, values)

  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort.`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));
