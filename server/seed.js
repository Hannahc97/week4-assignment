// Add your SQL queries here to create tables and add dummy data for testing purposes 

//! If you use the SQL editor on Supabase, please, copy and paste those queries here

// If you have set up your database pool in the server, you need to import it here

import { db } from "./server.js"

// db.query(
//     `CREATE TABLE guestbook (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     guest_name VARCHAR(255),
//     guest_from VARCHAR(255),
//     rating INT,
//     comment VARCHAR(255))`
// );

// db.query(
//     `INSERT INTO guestbook (guest_name, guest_from, rating, comment)
//     VALUES
//     ('Hannah', 'England', 5, 'Had a lovely stay at the hotel!')`
// );

// db.query(
//     `INSERT INTO guestbook (guest_name, guest_from, rating, comment)
//     VALUES
//     ('Nish', 'Australia', 5, 'Very hospitable and great food!')`
// );

// db.query(
//     `INSERT INTO guestbook (guest_name, guest_from, rating, comment)
//     VALUES
//     ('Khush', 'Hong Kong', 5, 'Lovely rooms and big pool!')`
// );

db.query(
    `DELETE FROM guestbook WHERE guest_name='NULL';`
);
