"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExperienceSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'id is required'],
    },
    startDate: {
        type: Date,
        required: [true, 'startDate is required'],
    },
    endDate: {
        type: Date,
        default: null,
    },
    isPresent: {
        type: Boolean,
        default: false,
    },
    position: {
        type: String,
        required: [true, 'position is required'],
    },
    responsibilities: {
        type: [String],
        required: [true, 'responsibilities is required'],
    },
    companyName: {
        type: String,
        required: [true, 'companyName is required'],
    },
    companyAddress: {
        type: String,
        required: [true, 'companyAddress is required'],
    },
}, { timestamps: true });
const Experience = (0, mongoose_1.model)('experience', ExperienceSchema);
exports.default = Experience;
