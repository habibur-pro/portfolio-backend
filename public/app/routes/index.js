"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_route_1 = __importDefault(require("../modules/skill/skill.route"));
const project_route_1 = __importDefault(require("../modules/project/project.route"));
const experience_route_1 = __importDefault(require("../modules/experience/experience.route"));
const blog_route_1 = __importDefault(require("../modules/blog/blog.route"));
const router = (0, express_1.Router)();
const routes = [
    {
        path: '/skills',
        route: skill_route_1.default,
    },
    {
        path: '/projects',
        route: project_route_1.default,
    },
    {
        path: '/experiences',
        route: experience_route_1.default,
    },
    {
        path: '/blogs',
        route: blog_route_1.default,
    },
];
routes.map(route => router.use(route.path, route.route));
exports.default = router;
