"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = __importDefault(require("./blog.controller"));
const router = (0, express_1.Router)();
router.post('/add-blog', blog_controller_1.default.AddBlog);
router.get('/', blog_controller_1.default.getAllBlogs);
const BlogRoutes = router;
exports.default = BlogRoutes;
