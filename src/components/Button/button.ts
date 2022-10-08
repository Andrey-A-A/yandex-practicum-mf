import Block from '../../core/Block';


interface ButtonProps {
  textContent?: string;
  className?: string;
  onClick: () => void;
}

export class Button extends Block {

  static componentName = 'Button';

  constructor({ textContent, className, onClick }: ButtonProps) {
    super({ textContent, className, events: { click: onClick } });
  }

  protected render(): string {
    return `
    <button type="button" class="{{className}}" value="">{{textContent}}</button>
    `;
  }
}
