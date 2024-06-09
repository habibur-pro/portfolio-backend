"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'id is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    icon: {
        type: String,
        required: [true, 'icon is required'],
    },
}, { timestamps: true });
const Skill = (0, mongoose_1.model)('skill', SkillSchema);
exports.default = Skill;
