import { Observable } from "rxjs";
import { BaseStatePropGroup } from "./base-state-prop-group";

export class BaseStateProp<T> {
  private _value = new BaseStatePropGroup<T>();
  private _inProgress = new BaseStatePropGroup<boolean>();
  private _error = new BaseStatePropGroup<any>();


  constructor(initValue: T | null = null) {
    if (initValue !== null){
      this._value.getSetterFuncion()(initValue);
    }
  }

  // Value
  setValueFunction(): (value: T | null) => void { return this._value.getSetterFuncion(); }
  getValueFunction(): () => Observable<T | null> { return this._value.getGetterFunction();}

  // InProgress
  setInProgressFunction(): (value: boolean) => void { return this._inProgress.getSetterFuncion(); }
  getInProgressFunction(): () => Observable<boolean  | null> { return this._inProgress.getGetterFunction();}

  // Error
  setErrorFunction(): (value: any) => void { return this._error.getSetterFuncion(); }
  getErrorFunction(): () => Observable<any> { return this._error.getGetterFunction();}



}
