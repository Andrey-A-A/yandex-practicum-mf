require('babel-core/register');
import Block from '../../core/Block';
import registerComponent from '../../core/registerComponent'
import Button from '../../components/Button';
import Q600 from '../../assets/img/Q600.png';


registerComponent(Button);



export class NotFoundPage extends Block {

  static componentName = 'NotFoundPage';

  constructor() {
    super()
  }

  render() {
    return `
      <div class='lack'>
        <h1 class='lack__title'>404</h1>
        <h3 class='lack__description'>Нет такой страницы, извините</h3>
        <div class='lack__wrap'>
          <img src='${Q600}' alt='404' />
        </div>
        <div class='lack__link'>
          <a href='/pages/chats'>Возвращайтесь к чатланам</a>
        </div>
      </div>
    `
  }
}
