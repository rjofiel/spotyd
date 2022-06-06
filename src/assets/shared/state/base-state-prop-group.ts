import { BehaviorSubject, Observable } from "rxjs";

export class BaseStatePropGroup<T> {

  private _currentSetter = this.completeSetter.bind(this);
  private _currentSetter$ = this.completeSetter$.bind(this);
  private _behavior: BehaviorSubject<T | null>;
  private _obs: Observable<T | null>;

  // Main functions

  getSetterFuncion(): (value: T | null) => void {
    return this.setter.bind(this);
  }

  getGetterFunction(): () => Observable<T | null> {
    return this.getter$.bind(this);
  }

  // Setter and Getters

  private setter(value: T | null): void {
    this._currentSetter(value);
  }

  private getter$(): Observable<T | null> {
    return this._currentSetter$();
  }

  //MAIN STRUCTURE

  private completeSetter(value: T | null) {
    this.initValueStructure();
    this._currentSetter(value);
  }

  private completeSetter$(): Observable<T | null> {
    this.initValueStructure();
    return this._currentSetter$();
  }

  private initValueStructure(): void {
    this._behavior = new BehaviorSubject<T | null>(null);
    this._obs = this._behavior.asObservable();

    this._currentSetter = this.simpleSetter.bind(this);
    this._currentSetter$ = this.simpleGetter$.bind(this);

  }

  private simpleSetter(value: T): void {
    this._behavior.next(value);
  }

  private simpleGetter$(): Observable<T | null> {
    return this._obs;
  }


}
