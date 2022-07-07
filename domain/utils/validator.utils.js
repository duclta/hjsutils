"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorUtils = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@heronjs/common");
const class_validator_1 = require("class-validator");
class ValidatorUtils {
    static validateOrReject(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, class_validator_1.validateOrReject)(input);
            }
            catch (errors) {
                console.log('Caught promise rejection (validation failed). Errors: ', errors);
                throw new common_1.RuntimeError(common_1.Errors.VALIDATION_ERR, 10000, 'Validate failed', errors);
            }
        });
    }
}
exports.ValidatorUtils = ValidatorUtils;
