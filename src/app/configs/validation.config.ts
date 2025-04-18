export const Validation = Object.freeze({
  email: {
    limit: {
      max: 254,
    },
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    limit: {
      min: 8,
      max: 72,
    },
  },
  fullName: {
    regex: /[0-9]/,
    limit: {
      min: 3,
      max: 30,
    },
  },
});

export const ValidationMessages = Object.freeze({
  required: (field: string) => `${field} is required.`,
  invalid: (field: string) => `Invalid ${field}`,
  minLength: (min: number) => `Minimum length is ${min} characters.`,
  maxLength: (max: number) => `Maximum length is ${max} characters.`,
});
