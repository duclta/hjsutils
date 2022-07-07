import { Optional } from '@heronjs/common';

export type UseCaseContext<T = any> = {
    firstInput: T;
};

export type UseCasePipeMethod<InputType = any, OutputType = any> = (
    payload: InputType,
) => Promise<OutputType>;

export interface IUseCase<T, K> {
    exec(firstInput: T): Promise<K>;
}

export abstract class UseCase<T, K, L extends Record<string, any>> implements IUseCase<T, K> {
    private _context: Optional<L>;
    protected get context(): L {
        if (!this._context) throw new Error('Context empty!');
        return this._context;
    }
    protected updateContext(key: keyof L, value: any) {
        if (!this._context) this._context = {} as any;
        // @ts-ignore
        this._context[key] = value;
    }

    protected _methods: UseCasePipeMethod[] = [];
    protected setMethods(methods: UseCasePipeMethod[]) {
        this._methods = methods;
    }

    async exec(firstInput: T): Promise<K> {
        if (this._methods && this._methods.length) {
            this.updateContext('firstInput', firstInput);
            let data = firstInput;
            for (let i = 0; i < this._methods.length; i++) {
                const method = this._methods[i];

                if (typeof method !== 'function') throw new Error('Pipe method is not valid function!');

                data = await method(data);
            }

            return data as any as K;
        } else throw new Error('Pipe methods not setted or empty!');
    }

    abstract validate: UseCasePipeMethod<any, any>;
    abstract processing: UseCasePipeMethod<any, any>;
    abstract map: UseCasePipeMethod<any, any>;
}
