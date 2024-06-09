"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CredentialsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    value: {
        type: String,
        required: [true, 'value is required'],
    },
});
const ProjectSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'id is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    technologies: {
        type: [String],
        required: [true, 'technologies is required'],
    },
    overview: {
        type: String,
        required: [true, 'overview is required'],
    },
    image: {
        type: String,
        required: [true, 'image is required'],
    },
    liveSite: {
        type: String,
        required: [true, 'liveSite is required'],
    },
    clientSite: {
        type: String,
        required: [true, 'clientSite is required'],
    },
    serverSite: {
        type: String,
        default: null,
    },
    features: {
        type: [String],
        default: null,
    },
    credentials: {
        type: [CredentialsSchema],
        default: null,
    },
}, { timestamps: true });
const Project = (0, mongoose_1.model)('project', ProjectSchema);
exports.default = Project;
