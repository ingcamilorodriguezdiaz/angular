
import { Validators, FormControl, ValidatorFn } from '@angular/forms';
export class Validacion {

  static getCampo(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl('', parameter);
  }



  static getCampoDisabled(required: boolean, disabled: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl({value:'',disabled}, parameter);
  }

  static getCheckBox(required: boolean) {
      const parameter: Array<ValidatorFn> = [];
      if (required) {
        parameter.push(Validators.required);
      }
      return new FormControl('', parameter);
  }

  static getRol(required: boolean, tipo: string) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl({value:tipo,disabled:false}, parameter);
}

  static getCampoLetras(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'));

    return new FormControl('', parameter);
  }
  static getCampoNombre(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.minLength(12));
    parameter.push(Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'));

    return new FormControl('', parameter);
  }


  static getCampoLetrasDisabled(required: boolean,disabled: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'));

    return new FormControl({value:'',disabled}, parameter);
  }

  static getCampoEmailDisabled(required: boolean,disabled: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.email);
    return new FormControl({value:'',disabled}, parameter);
  }

  static getCampoEmail(required: boolean) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.email);
    return new FormControl('', parameter);
  }
  static getCampoNumeroDisabled(required: boolean,disabled: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    if (min !== 0) {
      parameter.push(Validators.minLength(min));
    }
    if (max !== 0) {
      parameter.push(Validators.maxLength(max));
    }
    parameter.push(Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'));
    return new FormControl({value:'',disabled}, parameter);
  }

  static getCampoCelularDisabled(required: boolean,disabled: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    if (min !== 0) {
      parameter.push(Validators.minLength(min));
    }
    if (max !== 0) {
      parameter.push(Validators.maxLength(max));
    }
    return new FormControl({value:'',disabled}, parameter);
  }
  static getCampoNumero(required: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    if (min !== 0) {
      parameter.push(Validators.minLength(min));
    }
    if (max !== 0) {
      parameter.push(Validators.maxLength(max));
    }
    parameter.push(Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'));
    return new FormControl('', parameter);
  }

  static getPassword(required: boolean, min: number, max: number) {
    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    parameter.push(Validators.minLength(min));
    if (max != 0) {
      parameter.push(Validators.maxLength(max));
    }
    parameter.push(Validators.pattern('^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$'));

    return new FormControl('', parameter);
  }

  static getCampoDate(required: boolean) {

    const parameter: Array<ValidatorFn> = [];
    if (required) {
      parameter.push(Validators.required);
    }
    return new FormControl('', parameter);
  }
}
