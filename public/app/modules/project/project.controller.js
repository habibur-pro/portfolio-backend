"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = __importDefault(require("./project.service"));
const addProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield project_service_1.default.addProject(payload);
    return (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'project added successfully',
        data: result,
    });
}));
const getAllProject = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.default.getAllProject();
    return (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'projects fetched successfully',
        data: result,
    });
}));
const ProjectControls = {
    addProject,
    getAllProject,
};
exports.default = ProjectControls;
