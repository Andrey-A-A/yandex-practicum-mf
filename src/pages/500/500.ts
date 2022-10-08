require('babel-core/register');
import Block from '../../core/Block';



export class ServerErrorPage extends Block {

  static componentName = 'ServerErrorPage';

  constructor() {
    super()
  }

  render() {
    return `
    <div class='error'>
    <h1 class='error__title'>500</h1>
    <h3 class='error__description'>Ошибка сервера</h3>
    <div class='error__wrap'>
      <p>На сервере произошла непредвиденная ошибка. Пожалуйста, подождите, она будет скоро
        исправлена.</p>
      <p>попробуйте <a class='error__link' href='/pages/chats'>вернуться на главную страницу</a></p>
    </div>
  </div>
    `
  }
}
