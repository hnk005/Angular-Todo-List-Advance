import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function forbiddenTextValidator(textRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = textRe.test(control.value);
    return forbidden ? { forbiddenText: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenText]',
  standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenTextDirective,
      multi: true,
    },
  ],
})
export class ForbiddenTextDirective implements Validator {
  @Input('appForbiddenText') forbiddenText = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenText
      ? forbiddenTextValidator(new RegExp(this.forbiddenText, 'i'))(control)
      : null;
  }
}
