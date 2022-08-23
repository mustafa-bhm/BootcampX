SELECT day, COUNT(*) AS total_assignments, SUM(duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;


