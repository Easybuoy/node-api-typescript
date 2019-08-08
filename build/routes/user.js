"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
Router.get("/", (req, res) => {
    const add = (num1, num2) => {
        return num1 + num2;
    };
    const addition = add(1, 2);
    res.json({ status: 'success', message: 'User Route Is Working' });
});
exports.default = Router;
