import express from "express";

import { getSearch, getStock } from "../controllers/stock.js";

const router = express.Router()

router.get("/:symbol", getStock)
router.get("/search/:query", getSearch)

export default router