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
const randomGenerator_1 = __importDefault(require("../../utils/randomGenerator"));
const skill_model_1 = __importDefault(require("./skill.model"));
const addSkill = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, randomGenerator_1.default)();
    const skill = yield skill_model_1.default.create({
        id,
        name: payload.name,
        icon: payload.icon,
    });
    return skill;
});
const getallSkill = () => __awaiter(void 0, void 0, void 0, function* () {
    const skills = yield skill_model_1.default.find({}).sort({ createdAt: 'desc' });
    return skills;
});
const SkillServices = {
    addSkill,
    getallSkill,
};
exports.default = SkillServices;
