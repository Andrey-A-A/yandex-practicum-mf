import Block from '../../core/Block';


interface ChatProps {
  onInput?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
  id?: string;
  active?: string;
  src?: string;
  nickName?: string;
  lastMessage?: string;
  time?: string;
  quantity?: number;
  link?: string;
}

export class Chat extends Block {

  static componentName = 'Chat';

  constructor({onClick, ...props}: ChatProps) {
    super({...props, events: { click: onClick }})
  }
  protected render(): string {
    return `
      <a href={{link}} class='chats__list {{active}}'>
        <div class='chats__list-avatar'>
          <img src={{src}} width="45" height="45" alt="avatar"/>
        </div>
        <div class='chats__list-content'>
          <div class='chats__list-nickname'>{{nickName}}</div>
          <div class='chats__list-text'>{{lastMessage}}</div>
        </div>
        <div class='chats__list-activity'>
          <time class='chats__list-time'>{{time}}</time>
          <div class='chats__list-number'>
            <div>{{quantity}}</div>
          </div>
        </div>
      <a/>
    `
  } 
}
