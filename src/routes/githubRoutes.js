import fetchGithubProfile  from "../controller/githubController.js";
import express from 'express'
import getSingleProfile from "../controller/singleProfileController.js";
import getAllProfile from "../controller/GetAllProfileController.js";
const router = express.Router();


router.post("/analyze",fetchGithubProfile );
router.get("/profiles/:id",getSingleProfile);
router.get("/profiles",getAllProfile)

export default router;