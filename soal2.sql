SELECT 
    t1.id,
    t1.name,
    t2.name AS parent_name
FROM 
    tabel t1
LEFT JOIN 
    tabel t2
ON 
    t1.parent_id = t2.id;
