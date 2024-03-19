const client = require('../dbconfig');

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

async function getAllStudents() {
  try {
    const result = await client.query('SELECT * FROM students');  //select query to fetch data from student table
    console.log("All Students",result.rows)
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function addStudent(first_name, last_name, email, enrollment_date) {
  try {
    const result = await client.query(
      'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *', // parameterized query to insert student details
      [first_name, last_name, email, enrollment_date]
    );
    console.log("student Added", result.rows[0])
  } catch (error) {
    throw error;
  }
}

async function updateStudentEmail(student_id, new_email) {
  try {
    const result = await client.query(
      'UPDATE students SET email = $2 WHERE student_id = $1', //update user email at particular id
      [student_id,new_email]
    );
    console.log("Email edited",result.rows[0])
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteStudent(student_id) {
  try {
    await client.query('DELETE FROM students WHERE student_id = $1', [student_id]); // delete student at particular id
    console.log("Student Deleted")
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllStudents,
  addStudent,
  updateStudentEmail,
  deleteStudent,
};
