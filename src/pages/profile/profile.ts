require('babel-core/register');
import Block from '../../core/Block';
import DataList from '../../components/dataList';
import registerComponent from '../../core/registerComponent';
import Button from '../../components/Button';
import ErrorComponent from '../../components/error';
import avatar from '../../assets/img/avatar.png';

registerComponent(DataList);
registerComponent(Button);
registerComponent(ErrorComponent);


export class ProfilePage extends Block {

  static componentName = 'ProfilePage';

  constructor() {
    super()
  }

  render() {
    return `
    <div class='wrap'>
      <div class='avatar'>
        <img src='${avatar}' alt='Семен' />
      </div>
    <div class='name'>Семен</div>
    <div class='data'>
      {{{DataList item="Почта" itemData="mail@yandex.ru"}}}
      {{{DataList item="Логин" itemData="stepanov"}}}
      {{{DataList item="Имя" itemData="Степан"}}}
      {{{DataList item="Фамилия" itemData="Степанов"}}} 
      {{{DataList item="Имя в чате" itemData="Степан"}}} 
      {{{DataList item="Телефон" itemData="+79167777777"}}}    
    </div>
    <div class="management">
      <a href='/pages/changingProfile'>Изменить данные</a>
      <a href='/pages/changingPassword'>Изменить пароль</a>
      <a href='/'>Выйти</a>
    </div>
  </div>
    `
  }
}