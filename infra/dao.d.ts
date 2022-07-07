import { ModuleDatabase, Optional } from '@heronjs/common';
import { KnexClient } from '@heronjs/core';
export interface IDAO<T> {
    create(dto: T): Promise<string>;
    update(id: string, dto: Partial<T>): Promise<string>;
    delete(id: string): Promise<string>;
    find(): Promise<Partial<T>[]>;
    findById(id: string): Promise<Optional<Partial<T>>>;
}
export declare abstract class DAO<T> implements IDAO<T> {
    protected readonly _client: KnexClient;
    constructor(db: ModuleDatabase<KnexClient>);
    abstract create(dto: T): Promise<string>;
    abstract update(id: string, dto: Partial<T>): Promise<string>;
    abstract delete(id: string): Promise<string>;
    abstract find(): Promise<Partial<T>[]>;
    abstract findById(id: string): Promise<Optional<Partial<T>>>;
}
