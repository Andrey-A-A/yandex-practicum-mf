import Block from '../../core/Block';

//import './input.css';

interface InputProps {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email' | 'file';
  placeholder?: string;
  name?: string;
  id?: string;
  error?: string;
  class?: string;
}

export class Input extends Block {

  static componentName = 'Input';

  constructor({ onBlur, onInput, onFocus, ...props }: InputProps) {
    super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } });
  }

  protected render(): string {
    return `
    <input type="{{type}}" id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" class="{{class}}">
    `;
  }
}

