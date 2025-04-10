export const ValidationMessages = Object.freeze({
  required: (field: string) => `${field} is required.`,
  invalid: (field: string) => `Invalid ${field}`,
  minLength: (min: number) => `Minimum length is ${min} characters.`,
  maxLength: (max: number) => `Maximum length is ${max} characters.`,
});
