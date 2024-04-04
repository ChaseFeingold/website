CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT);
    
CREATE TABLE diary_logs (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    date TEXT,
    content TEXT
    );
    

INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2025-07-01",
    "The sky is falling and I feel like the end is coming.");
    
INSERT INTO diary_logs (user_id, date, content) VALUES (1, "2035-04-02",
    "It's been 10 years and to survive I have to destroy zombies.");

SELECT * FROM diary_logs;

UPDATE diary_logs SET content =  "It's been 10 years and to survive I have to kil zombies." WHERE id = 2;
SELECT * FROM diary_logs;