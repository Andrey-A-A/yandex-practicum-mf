import Block from '../../core/Block';


interface ChatProps {
  onInput?: () => void;
  onFocus?: () => void;
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

  constructor(props: ChatProps) {
    super({...props})
  }
  protected render(): string {
    return `
      <a href={{link}} class='chats__list {{active}}'>
        <div class='chats__list-avatar'>
          <img src={{src}} width="45" height="45"/>
        </div>
        <div class='chats__list-content'>
          <div class='chats__list-nickname'>{{nickName}}</div>
          <div class='chats__list-text'>{{lastMessage}}</div>
        </div>
        <div class='chats__list-activity'>
          <div class='chats__list-time'>{{time}}</div>
          <div class='chats__list-number'>
            <div>{{quantity}}</div>
          </div>
        </div>
      <a/>
    `
  } 
}

