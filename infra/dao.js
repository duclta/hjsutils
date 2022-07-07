"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAO = void 0;
const common_1 = require("@heronjs/common");
class DAO {
    constructor(db) {
        const client = db.database();
        if (!client)
            throw new common_1.SQLError(common_1.SQLErrors.CONNECTION_ERR, 'Database client is undefined');
        this._client = client;
    }
}
exports.DAO = DAO;
