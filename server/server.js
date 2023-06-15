const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = 8081;

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  try {
    const sql = "SELECT * FROM student";
    console.log(sql, "sqlsql");
    db.query(sql, (err, rows) => {
      console.log(err, "errrrrrrr");
      if (err) {
        return res.status(500).json({ error: "Error inside server" });
      } else {
        return res.status(200).json(rows);
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Error inside server" });
  }
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?, ?)";
  const values = [req.body.name, req.body.email];
  console.log(values, "");

  db.query(sql, values, (err, data) => {
    if (err) {
      console.log(data, "data");
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});








// app.get("/", (req, res) => {
 
//   try {
//     const sql = "SELECT * FROM student";
//     console.log(sql, "sqlsql");
//     db.query(sql, (err, rows) => {
//       console.log(err, "errrrrrrr");
//       if (err) {
//         return res.json("Error insideserver===>");
//       } else {
//         return res.json(rows);
//       }
//     });
//   } catch {
//     res.send("errrrr");
//   }
// });