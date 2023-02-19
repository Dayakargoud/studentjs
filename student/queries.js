const getStudents = "SELECT * FROM STUDENTS";

const getStudentByID = "SELECT * FROM STUDENTS WHERE ID = $1";

const checkEmailExists = "SELECT s FROM STUDENTS s WHERE s.email = $1";

const addStudent = "INSERT INTO STUDENTS (name, email, age , dob) VALUES ( $1, $2, $3, $4)";

const deleteStudent = "DELETE FROM STUDENTS WHERE id = $1";

const updateStudent = "UPDATE STUDENTS SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getStudentByID,
    checkEmailExists,
    addStudent,
    deleteStudent,
    updateStudent
};

