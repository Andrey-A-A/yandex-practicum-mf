require('babel-core/register');
import Block from '../../core/Block';
import Input from '../../components/input';
import Chat from '../../components/chat'
import registerComponent from '../../core/registerComponent'
import Button from '../../components/Button';
import ErrorComponent from '../../components/error';
import { validateForm, ValidateType } from '../../helpers/validateRegForm';
import avatar from '../../assets/img/avatar.png';
import clip from '../../assets/img/clip.svg'
import send from '../../assets/img/send.svg'

registerComponent(Input);
registerComponent(Chat);
registerComponent(Button);
registerComponent(ErrorComponent);

export class ChatsPage extends Block {

  static componentName = 'ChatsPage';

  constructor(onClick: () => void) {
    super( { events: { click: onClick } }
    //   {
    //   ...props,
    //   onBlur: (e: FocusEvent): void => {
    //     const inputEl = e.target as HTMLInputElement;
        
  
    //     const typeE = ValidateType[inputEl.name as keyof typeof ValidateType];
        
      
    //     const errorMessage = validateForm([{ type: typeE, value: inputEl.value }]);
    //       console.log('errorMessage=', errorMessage );
  
    //     let element;
  
    //     if (typeE === ValidateType.Message) {
    //       element = this.refs.messageInputRef;
    //     } 
    //     const refsonblur = element?.refs.errorRef.setProps({ text: errorMessage });
    //     console.log('refsonblur=', refsonblur);
        
    //   },
    // }
    )

    this.setProps({
      error: '',
      messageValue: '',
      
      onBlur: (e: FocusEvent): void => {
        const inputEl = e.target as HTMLInputElement;
        
  
        // const typeE = ValidateType[inputEl.name as keyof typeof ValidateType];
        const error = validateForm([{ type: ValidateType.Message, value: inputEl.value }]);
        const refsError = this.refs.errorRef.setProps({ text: error });
        console.log('error=', error);
        console.log('refsError=', refsError);
        console.log('this.refs=', this.refs);
        
      
        // const errorMessage = validateForm([{ type: typeE, value: inputEl.value }]);

          // console.log('error=', error );
  
        // let element;
  
        // if (typeE === ValidateType.Message) {
        //   element = this.refs.messageInputRef;
        // } 
        // console.log('element=', element);
        // console.log('element?.refs=', element?.refs);
        // console.log('element?.refs.errorRef=', element?.refs.errorRef);
        
        // const refsonblur = element?.refs.errorRef.setProps({ text: errorMessage });
        // console.log('refsonblur=', refsonblur);
        
      },
      onInput: (e: Event): void => {
        
        const inputEl = e.target as HTMLInputElement;
        // const error = validateForm([{ type: ValidateType.Message, value: inputEl.value }]);

        const type = ValidateType[inputEl.name as keyof typeof ValidateType];
        console.log('type=', type);
        
        const errorMessage = validateForm([{ type: type, value: inputEl.value }]);
        console.log('errorMessage=', errorMessage);
        // console.log('this.refs.messageInputRef=', this.refs.messageInputRef);
        // this.refs.messageInputRef.refs.errorRef.setProps({ text: error });
        // console.log('error=', error);
        // console.log('this.refs=', this.refs);
        let el;
        if (type === ValidateType.Message) {
          el = this.refs.messageInputRef;
        }
        console.log('el=', el);
        
        el?.refs?.errorRef?.setProps({ text: errorMessage });
      },
      onFocus: (): void => console.log('focus'),
      onSubmit: (e: Event): void => {
        const inputEl = e.target as HTMLInputElement;
        const messageEl = this.element?.querySelector('input[name="Message"]') as HTMLInputElement;

        const errorMessage = validateForm([
          { type: ValidateType.Message, value: messageEl.value }
        ]);

        if (errorMessage) {
          this.setProps({
            error: errorMessage,
            messageValue: messageEl.value,
          });
        } else {
          this.setProps({
            error: '',
            messageValue: messageEl.value
          });
          console.log('form ready to send to API');
          const data = {
            messageValue: messageEl.value
          }
          console.log(data);
          
        }
      }
    }); 
  }

  render() {
    return `
    <main class='main'>
    <div class='chats'>
      <div class='chats__left'>
        <div class='chats__profile-link'>
          <a href='/pages/profile'>Профиль >></a>
        </div>
        <div class='search'>
          <form class='container'>
            <input type='text' maxlength='12' placeholder='Поиск чатов' class='searchbar' />
            <button class='button' type='submit' class='search-button'>
            </button>
          </form>
        </div>
        <div class="selected-chat">
          {{{Chat
            link="/pages/chats"
            active="active"
            src="${avatar}"
            nickName="Степан"
            lastMessage="новое полученное сообщение"
            time="15.00"
            quantity="4"
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Петя"
            lastMessage="последнее полученное сообщение"
            time="ВТ"
            quantity=""
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Володя"
            lastMessage="жизнь хороша и жить хорошо"
            time="Ср"
            quantity="3"
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Никодим"
            lastMessage="Миру Мир!"
            time="17.00"
            quantity=""
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Таня"
            lastMessage="Какой хороший день!"
            time="06.00"
            quantity="1"
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Клавдия"
            lastMessage="Ждите хороших новостей..."
            time="12.45"
            quantity="6"
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Игорь"
            lastMessage="Мороз и солнце, день..."
            time="Пт"
            quantity=""
          }}}
          {{{Chat
            link="pages/chats"
            active=""
            src="${avatar}"
            nickName="Kadet"
            lastMessage="Всем здравствуйте!"
            time="23.00"
            quantity="3"
          }}}
        </div>
      </div>
      <div class='chats__right'>
        <div class='right__top'>
          <div class='right__top-left'>
            <div class='right__top-avatar'>
              <img src='${avatar}' alt='avatar' width="45" height="45"/>
            </div>
            <div class='right__top-nickname'>
              <p>Степан</p>
            </div>
          </div>
          <a href='#blackout' class='right__top-dots'>
           <?xml version="1.0" ?><svg enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg>
          </a>
          <div id='blackout'>
            <div id='modal'>
              <a class='btn' href='#confirmation'>Удалить чат</a>
              <a class='btn' href='#' id='close'>Закрыть окно</a>
            </div>
          </div>
          <div id='confirmation'>
            <div id='modal-confirm'>
              <a class='btn' href='./index.hbs'>Подтвердите!</a>
              <a class='btn' href='#' id='close'>Закрыть окно</a>
            </div>
          </div>
        </div>
        <div class='chats__right-date'>19 сентября</div>
        <div class='message'>
          <div class='message__content'>
            <div class='message__content-text'>
              Есть в светлости осенних вечеров Умильная, таинственная прелесть: Зловещий блеск и
              пестрота дерев, Багряных листьев томный, легкий шелест, Туманная и тихая лазурь Над
              грустно-сиротеющей землею, И, как предчувствие сходящих бурь, Порывистый, холодный ветр
              порою, Ущерб, изнеможенье — и на всем Та кроткая улыбка увяданья, Что в существе
              разумном мы зовем Божественной стыдливостью страданья.
            </div>
            <div class='message__content-time'>15.00</div>
          </div>
          <div class='message__answer'>
            <div class='message__answer-text'>
              Круто!
            </div>
            <div class='message__answer-time'>12.00</div>
          </div>
        </div>
        <div class='sending'>
          <form class='example-1' enctype='multipart/form-data'>
            <label class='label'>
              <img src='${clip}' alt='' />
            </label>
            <div class="example-1__wrap">
            {{{Input
              ref="messageInputRef"
              type="text"
              placeholder="Сообщение"
              name="Message"
              class="sending__message"
              onInput=onInput
              onFocus=onFocus
              onBlur=onBlur
            }}}
            {{{Error ref="errorRef" text=error}}}
            </div>
            {{{Button textContent="отправить" className="sending__button" onClick=onSubmit}}}
          </form>
          </div>
      </div>
    </div>
    </main>
    `
  }
}