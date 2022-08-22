
SELECT cohorts.name as cohort_name, COUNT(students.*) AS student_count
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(students.name) >= 18
ORDER BY COUNT(students.name) ASC;
