import { v4 as uuidV4 } from 'uuid';

export class EntityIdUtils {
    static randomUUID(): string {
        return uuidV4();
    }
}
