require('babel-core/register');
import Block from '../../core/Block';
import registerComponent from '../../core/registerComponent';

import Input from '../../components/input';
import Data from '../../components/data';
import Button from '../../components/Button';
import ErrorComponent from '../../components/error';

import { validateForm, ValidateType } from '../../helpers/validateRegForm';

import avatar from '../../assets/img/avatar.png';
import clip from '../../assets/img/clip.svg';
import send from '../../assets/img/send.svg'

registerComponent(Input);
registerComponent(Data);
registerComponent(Button);
registerComponent(ErrorComponent);




export class ChangingProfilePage extends Block {

  static componentName = 'ChangingProfilePage';

  constructor() {
    super()

    this.setProps({
      onInput: (e: Event): void => {
        const inputEl = e.target as HTMLInputElement;
              
        const type = ValidateType[inputEl.name as keyof typeof ValidateType];
                
        const errorMessage = validateForm([{ type: type, value: inputEl.value }]);
                
        let el;
        if (type === ValidateType.Login) {
          el = this.refs.loginInputRef;
        } else if (type === ValidateType.Email) {
          el = this.refs.emailInputRef;
        } else if (type === ValidateType.FirstName) {
          el = this.refs.firstNameInputRef;
        } else if (type === ValidateType.LastName) {
          el = this.refs.lastNameInputRef;
        } else if (type === ValidateType.NickName) {
          el = this.refs.nickNameInputRef;
        } else if (type === ValidateType.Phone) {
          el = this.refs.phoneInputRef;
        } 
        
        el?.refs.errorRef.setProps({ text: errorMessage });
      },
      onFocus: (): void => console.log('focus'),
      onSubmit: (): void => {

        const loginEl = this.element?.querySelector('input[name="Login"]') as HTMLInputElement;
        const firstNameEl = this.element?.querySelector('input[name="FirstName"]') as HTMLInputElement;
        const lastNameEl = this.element?.querySelector('input[name="LastName"]') as HTMLInputElement;
        const nickNameEl = this.element?.querySelector('input[name="NickName"]') as HTMLInputElement;
        const phoneEl = this.element?.querySelector('input[name="Phone"]') as HTMLInputElement;
        const emailEl = this.element?.querySelector('input[name="Email"]') as HTMLInputElement;


        const errorMessageLogin = validateForm([
          { type: ValidateType.Login, value: loginEl.value }
        ]);

        const errorMessageFirstName = validateForm([
          { type: ValidateType.FirstName, value: firstNameEl.value }
        ]);

        const errorMessageLastName = validateForm([
          { type: ValidateType.LastName, value: lastNameEl.value }
        ]);

        const errorMessagePhone = validateForm([
          { type: ValidateType.Phone, value: phoneEl.value }
        ]);

        const errorMessageNickName = validateForm([
          { type: ValidateType.NickName, value: nickNameEl.value }
        ]);

        const errorMessageEmail = validateForm([
          { type: ValidateType.Email, value: emailEl.value }
        ]);

        
        if (errorMessageLogin || errorMessageFirstName || errorMessageLastName || errorMessagePhone || errorMessageNickName || errorMessageEmail) {
          console.log('Ошибка ввода данных');
          
          if (errorMessageLogin) {
            this.refs.loginInputRef.refs.errorRef.setProps({ text: errorMessageLogin });
          }
          if (errorMessageFirstName) {
            this.refs.firstNameInputRef.refs.errorRef.setProps({ text: errorMessageFirstName });
          }
          if (errorMessageLastName) {
            this.refs.lastNameInputRef.refs.errorRef.setProps({ text: errorMessageLastName });
          }
          if (errorMessagePhone) {
            this.refs.phoneInputRef.refs.errorRef.setProps({ text: errorMessagePhone });
          }
          if (errorMessageNickName) {
            this.refs.nickNameInputRef.refs.errorRef.setProps({ text: errorMessageNickName });
          }
          if (errorMessageEmail) {
            this.refs.emailInputRef.refs.errorRef.setProps({ text: errorMessageEmail });
          }
        } else {
          
          const data = {
            loginValue: loginEl.value,
            firstNameValue: firstNameEl.value,
            lastNameValue: lastNameEl.value,
            emailValue: emailEl.value,
            nickNameValue: nickNameEl,
            phoneValue: phoneEl.value,
          }
          console.log("Данные введенные в форму", data);
        
        }
        console.log('End!');
        
      }
    })
  }

  render() {
    return `
    <div class='wrap'>
      <div class='avatar'>
        <img src='${avatar}' alt='Семен' />
      </div>
    <div class="change__avatar">
    <p>Выберете вашу фотографию</p>
      <form class='change__avatar-file' enctype='multipart/form-data'>
        <label class='label'>
          <img src='${clip}' alt='adding a file' />
          <input type='file' name='avatar' />
        </label>
        <button type='button' class='sending__button-img'><img src='${send}' alt='send' />
        </button>
      </form>
    </div>
    <form class='change__form'>
    {{{ Data
      ref="emailInputRef"
      item="Почта"
      onInput=onInput
      onFocus=onFocus
      type="email"
      name="Email"
      placeholder="yandex@ya.ru"
      id="email"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{ Data
      ref="loginInputRef"
      item="Логин"
      onInput=onInput
      onFocus=onFocus
      type="text"
      name="Login"
      placeholder="Ваш логин"
      id="login"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{ Data
      ref="firstNameInputRef"
      item="Имя"
      onInput=onInput
      onFocus=onFocus
      type="text"
      name="FirstName"
      placeholder="Степан"
      id="Firstname"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{ Data
      ref="lastNameInputRef"
      item="Фамилия"
      onInput=onInput
      onFocus=onFocus
      type="text"
      name="LastName"
      placeholder="Степанов"
      id="Lastname"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{ Data
      ref="nickNameInputRef"
      item="Имя в чате"
      onInput=onInput
      onFocus=onFocus
      type="text"
      name="NickName"
      placeholder="Степан"
      id="NickName"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{ Data
      ref="phoneInputRef"
      item="Телефон"
      onInput=onInput
      onFocus=onFocus
      type="text"
      name="Phone"
      placeholder="+79167777777"
      id="Phone"
    }}}
    {{#if error}}{{error}}{{/if}}
    {{{Button textContent="Сохранить" className="btn" onClick=onSubmit}}}
    <div class="btn"><a href="/pages/profile">Вернуться назад</a></div>
    </form>
  </div>
    `
  }
}