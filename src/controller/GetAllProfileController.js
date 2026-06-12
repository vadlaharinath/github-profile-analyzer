import db from "../config/db.js";
import mysql from "mysql2/promise";

const getAllProfile = async (req, res) => {
    const connection = await db();
    try {
        const sql = "select * from github_profiles";
        const [result] = await connection.query(sql);

        if (result) {
            return res.status(200).json(result);
        }
        res.status(500).json({
            success: false,
            message: error.message,
        });

    } catch (error) {
        console.log("error at getAllProfiles", error.message);

    }

};

export default getAllProfile;