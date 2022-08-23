SELECT AVG(total_duration )
FROM (SELECT cohorts.name , SUM(completed_at - started_at) as total_duration
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name) as  average_total_duration ;

