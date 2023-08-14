export type Result<T> = Success<T> | Failure<T>;

export namespace Result {
  export function ok<U>(value: U): Success<U> {
    return new Success<U>(value);
  }

  export function fail<U>(error: string): Failure<U> {
    return new Failure<U>(error);
  }
}

export class Failure<T> {
  public constructor(private readonly error: string) {
    Object.freeze(this);
  }
  public errorValue(): string {
    return this.error;
  }

  public isSuccess(): this is Success<T> {
    return false;
  }
  public isFailure(): this is Failure<T> {
    return true;
  }
}

export class Success<T> {
  constructor(private readonly value: T) {
    Object.freeze(this);
  }

  public getValue(): T {
    return this.value;
  }

  public isSuccess(): this is Success<T> {
    return true;
  }
  public isFailure(): this is Failure<T> {
    return false;
  }
}
