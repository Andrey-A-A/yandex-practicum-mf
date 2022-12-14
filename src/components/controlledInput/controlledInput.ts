import Block from '../../core/Block';
import { validateForm, ValidateType } from '../../helpers/validateRegForm';
import Input from '../input';

interface ControlledInputProps {
  onInput?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
  id?: string;
}

export class ControlledInput extends Block {

  static componentName = 'ControlledInput';

  constructor(props: ControlledInputProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement;
        
        const typeE = ValidateType[inputEl.name as keyof typeof ValidateType];
      
        const errorMessage = validateForm([{ type: typeE, value: inputEl.value }]);

      let element;

      if (typeE === ValidateType.Login) {
        element = this.refs.loginInputRef;
      } else if (typeE === ValidateType.Password) {
        element = this.refs.passwordInputRef;
      }

      element?.refs.errorRef.setProps({ text: errorMessage });

      },
    });
  }

  protected render(): string {
    return `
    <div class="controlled-input">
    {{{Input
        name="{{name}}"
        type="{{type}}"
        placeholder="{{placeholder}}"
        id="{{id}}"
        onInput=onInput
        onFocus=onFocus
        onBlur=onBlur
    }}}
    {{{Error ref="errorRef" text=error}}}
  </div>
    `;
  }
}
