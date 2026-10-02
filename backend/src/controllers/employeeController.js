const db = require("../config/db");

exports.getEmployees = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM employees ORDER BY id DESC"
    );

    res.json(rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch employees"
    });
  }
};