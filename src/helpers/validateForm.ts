export enum ValidateType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
}

type ValidateRule = {
  type: ValidateType;
  value: string;
};

export function validateForm(rules: ValidateRule[]) {
  let errorMessage = '';

  for (let i = 0; i < rules.length; i++) {
    const { type, value } = rules[i];

    if (type === ValidateType.Login) {
      if (value.length === 0) {
        errorMessage = 'Поле логин не должно быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Логин должен содержать более чем 3 символа';
        break;
      }
    } else if (type === ValidateType.Password) {
      if (value.length === 0) {
        errorMessage = 'Поле пароль не должно быть пустым';
        break;
      } else if (value.length < 4) {
        errorMessage = 'Пароль должен содержать более чем 3 символа';
        break;
      }
    }
  }

  return errorMessage;
}
