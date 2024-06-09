"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_controller_1 = __importDefault(require("./skill.controller"));
const router = (0, express_1.Router)();
router.post('/add-skill', skill_controller_1.default.AddSkill);
router.get('/', skill_controller_1.default.getAllSkill);
const SkillRoutes = router;
exports.default = SkillRoutes;
