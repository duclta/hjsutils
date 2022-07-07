import { Errors, RuntimeError } from '@heronjs/common';
import { validateOrReject } from 'class-validator';

export class ValidatorUtils {
    static async validateOrReject(input: any) {
        try {
            await validateOrReject(input);
        } catch (errors) {
            console.log('Caught promise rejection (validation failed). Errors: ', errors);

            throw new RuntimeError(Errors.VALIDATION_ERR, 10000, 'Validate failed', errors as any);
        }
    }
}
