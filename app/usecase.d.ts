export declare type UseCaseContext<T = any> = {
    firstInput: T;
};
export declare type UseCasePipeMethod<InputType = any, OutputType = any> = (payload: InputType) => Promise<OutputType>;
export interface IUseCase<T, K> {
    exec(firstInput: T): Promise<K>;
}
export declare abstract class UseCase<T, K, L extends Record<string, any>> implements IUseCase<T, K> {
    private _context;
    protected get context(): L;
    protected updateContext(key: keyof L, value: any): void;
    protected _methods: UseCasePipeMethod[];
    protected setMethods(methods: UseCasePipeMethod[]): void;
    exec(firstInput: T): Promise<K>;
    abstract validate: UseCasePipeMethod<any, any>;
    abstract processing: UseCasePipeMethod<any, any>;
    abstract map: UseCasePipeMethod<any, any>;
}
