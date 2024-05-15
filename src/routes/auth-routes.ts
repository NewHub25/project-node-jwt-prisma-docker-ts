import express from "express";
import { register } from "../controllers/auth-controller";

const router = express.Router();

router.post("/register", register);
router.post("/login",()=>{});

export default router;