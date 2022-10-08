import Block from '../../core/Block';
import { validateForm, ValidateType } from '../../helpers/validateRegForm';
import Input from '../input';

interface DataProps {
  onInput?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
  id?: string;
  item?: string;
}

export class Data extends Block {

  static componentName = 'Data';

  constructor(props: DataProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent): void => {
      const inputEl = e.target as HTMLInputElement;
      

      const typeE = ValidateType[inputEl.name as keyof typeof ValidateType];
      
    
      const errorMessage = validateForm([{ type: typeE, value: inputEl.value }]);
        console.log('errorMessage=', errorMessage );

      let element;

      if (typeE === ValidateType.Login) {
        element = this.refs.loginInputRef;
      } else if (typeE === ValidateType.Password) {
        element = this.refs.passwordInputRef;
      } else if (typeE === ValidateType.ReplayPassword) {
        element = this.refs.replayPasswordInputRef;
      } else if (typeE === ValidateType.Email) {
        element = this.refs.emailInputRef;
      } else if (typeE === ValidateType.FirstName) {
        element = this.refs.firstNameInputRef;
      } else if (typeE === ValidateType.LastName) {
        element = this.refs.firstNameInputRef;
      } else if (typeE === ValidateType.NickName) {
        element = this.refs.nickNameInputRef;
      } else if (typeE === ValidateType.Phone) {
        element = this.refs.phoneInputRef;
      } 
      element?.refs.errorRef.setProps({ text: errorMessage });
      },
    });
  }

  protected render(): string {
    return `
    <div class='change__data'>
      <div class='change__data-list'>
        <span>{{item}}</span>
        <div class='change'>
          {{{Input
            name="{{name}}"
            type="{{type}}"
            placeholder="{{placeholder}}"
            id="{{id}}"
            onInput=onInput
            onFocus=onFocus
            onBlur=onBlur
          }}}
        </div>
      </div>
      {{{Error ref="errorRef" text=error}}}
    </div>
    `;
  }
}