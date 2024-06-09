"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experience_controller_1 = __importDefault(require("./experience.controller"));
const router = (0, express_1.Router)();
router.post('/add-experience', experience_controller_1.default.addExperience);
router.get('/', experience_controller_1.default.getAllExperience);
const ExperienceRoutes = router;
exports.default = ExperienceRoutes;
