import db from "../config/db.js";
import mysql from "mysql2/promise";

const getSingleProfile = async (req, res) => {
    const connection = await db();
    try {
        const { id } = req.params;
        console.log("id", id);

        const sql = `SELECT * FROM github_profiles WHERE id=${id}`;
        const[result]=await connection.query(sql);

        if (result) {
            return res.status(200).json(result);
        }
        res.status(500).json({
            success: false,
        });


    } catch (error) {
        console.log("error at single profile", error.message);

    }

}
export default getSingleProfile;