"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityIdUtils = void 0;
const uuid_1 = require("uuid");
class EntityIdUtils {
    static randomUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.EntityIdUtils = EntityIdUtils;
