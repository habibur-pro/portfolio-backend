"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const randomGenerator = () => {
    const id = crypto_1.default.randomBytes(6).toString('hex');
    return id;
};
exports.default = randomGenerator;
