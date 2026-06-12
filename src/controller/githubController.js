import axios from "axios";
import db from "../config/db.js";
import mysql from "mysql2/promise";


const fetchGithubProfile = async (req, res) => {
    const connection = await db();
    try {
        const { username } = req.body;
        console.log("username", username);

        const githubRes = await axios.get(`https://api.github.com/users/${username}`);
        console.log("githubRes-data", githubRes.data);
        const user = githubRes.data;
        res.status(200).json({ success: true, "message": user });

        const sql = "insert into github_profiles(username,name,followers,following,public_repos,public_gists,profile_url,avatar_url)values(?,?,?,?,?,?,?,?);"

        connection.query(sql, [user.login, user.name, user.followers, user.following, user.public_repos, user.public_gists, user.html_url, user.avatar_url], (err, result) => {
            if (err) {
                return res.status(500).json({err,message:"user not avaialable"});
            }

            res.status(201).json({
                message: "Profile Stored in database Successfully"
            });
        })

    } catch (error) {
        console.log("error at analyzer", error.message);

    }


};
export default fetchGithubProfile;