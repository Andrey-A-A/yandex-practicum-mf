import Block from '../../core/Block';
import { validateForm, ValidateType } from '../../helpers/validateRegForm';
import ControlledInput from '../../components/controlledInput';

export class LoginPage extends Block {

  static componentName = 'LoginPage';

  constructor() {
    super();
    
    this.setProps({
      error: '',
      loginValue: '',
      passwordValue: '',
      onInput: (e: Event): void => {
        
        const inputEl = e.target as HTMLInputElement;
        
        const type = ValidateType[inputEl.name as keyof typeof ValidateType];
        const errorMessage = validateForm([{ type: type, value: inputEl.value }]);
        
        let el;
        if (type === ValidateType.Login) {
          el = this.refs.loginInputRef;
        } else if (type === ValidateType.Password) {
          el = this.refs.passwordInputRef;
        }
        el?.refs.errorRef.setProps({ text: errorMessage });
      },
      onFocus: (): void => console.log('focus'),
      onBlur: (): void => console.log('blur'),
      onSubmit: (): void => {
                
        const loginEl = this.element?.querySelector('input[name="Login"]') as HTMLInputElement;
        const passowrdEl = this.element?.querySelector(
          'input[name="Password"]',
        ) as HTMLInputElement;

        const errorMessageLogin = validateForm([
          { type: ValidateType.Login, value: loginEl.value }
        ]);

        const errorMessagePassword = validateForm([
          { type: ValidateType.Password, value: passowrdEl.value }
        ]);

        if (errorMessageLogin || errorMessagePassword) {
          if (errorMessageLogin) {
            this.refs.loginInputRef.refs.errorRef.setProps({ text: errorMessageLogin });
          }
          if (errorMessagePassword) {
            this.refs.passwordInputRef.refs.errorRef.setProps({ text: errorMessagePassword });
          }
        } else {
          
          const data = {
            loginValue: loginEl.value,
            passwordValue: passowrdEl.value,
          }
          console.log("Данные введенные в форму", data);
        }
      }
    });
  }

  render() {
    return `
    <div class='login__wrap'>
    <h1 class='heading'>Авторизация</h1>
    <form class='login__form'>
    <label for='login'>Логин</label>
      {{{ControlledInput
        ref="loginInputRef"
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="Login"
        placeholder="Ваш_логин"
        label="Логин"
        id="login"
      }}}
    <label for='password'>Пароль</label>
      {{{ControlledInput
        ref="passwordInputRef"
        onInput=onInput
        onFocus=onFocus
        type="password"
        name="Password"
        placeholder="•••••••"
        id="passoword"
      }}}
      {{{Button textContent="Вход" className="btn" onClick=onSubmit}}}
      <div class='btn'><a href='/pages/registration'>Регистрация</a></div>
      <div class='btn'><a href='/pages/chats'>Вернуться назад</a></div>
    </form>
  </div>
    `;
  }
}

