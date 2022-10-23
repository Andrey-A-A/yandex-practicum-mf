import Block from '../../core/Block';

type SvgInHtml = HTMLElement & SVGElement;

type LinkProps = {
  textContent?: string|SvgInHtml;
  className?: string;
  path?: string;
  onClick?: () => void;
};

export class Link extends Block {
  static componentName = 'Link';

  constructor({ onClick, ...props}: LinkProps) {
    super({ ...props, events: { click: onClick } });
  }

  protected render(): string {
    return `
    <a href="{{path}}" class="{{className}}"><div data-slot="1">{{textContent}}</div></a>
    `;
  }
}