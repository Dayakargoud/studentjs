const pool = require("../src/db")
const queries = require("./queries")

const getStudents = (req,res) => {
    pool.query(queries.getStudents,(error,result) => {
        if(error) throw error;
        res.status(200).json(result.rows)
    });
};

const getStudentById = (req,res) => {
     
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentByID,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
    });
};

const addStudent = (req, res) => {
    const { name, email, age , dob } = req.body;

    //check email exists

    pool.query(queries.checkEmailExists,[email],(error,result) => {
        if(result.rows.length){
            res.send("Email already exists");
        }

        // Add students to db
        pool.query(queries.addStudent,[ name, email, age , dob ], (error,result) => {

            if(error) throw error;

            res.status(201).send("Student created successfully");
        })
    });

};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentByID,[id],(error,result) => {
        if(error) throw error;
        const noStudentFound = !result.rows.length
        if(noStudentFound){
            res.send("Student not found");
        }else{

        pool.query(queries.deleteStudent,[id], (error,result) => {
            if(error) throw error;
            res.status(200).send("Student deleted successfully");
        })
    }

    })
}

const updateStudent = (req,res) => {
    const id = parseInt(req.params.id);
    const { name, email, age , dob } = req.body;


    pool.query(queries.getStudentByID,[id],(error,result) => {
        if(error) throw error;
        const noStudentFound = !result.rows.length
        if(noStudentFound){
            res.send("Student not found");
        }else{
        pool.query(queries.updateStudent,[name, id], (error,result) => {
            if(error) throw error;
            res.status(200).send("Student updated successfully");
        })
    }

    })

}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent

};