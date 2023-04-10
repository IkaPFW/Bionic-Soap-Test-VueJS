SELECT item FROM (
	SELECT DISTINCT item, RIGHT(item, 1) AS last_char FROM "Bionic_Vue_Test".public.assets
) a
ORDER BY RIGHT(item, 1) DESC;

SELECT user_id, STRING_AGG(item, ',') FROM "Bionic_Vue_Test".public.assets
GROUP BY user_id;