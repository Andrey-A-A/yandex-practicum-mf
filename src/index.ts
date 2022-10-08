require('babel-core/register');
import { Block, renderDOM, registerComponent } from './core';

import Button from './components/Button';
import Input from './components/input';
import ControlledInput from './components/controlledInput';
import ErrorComponent from './components/error';
import LoginPage from './pages/login';

registerComponent(Button);
registerComponent(Input);
registerComponent(ControlledInput);
registerComponent(ErrorComponent);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new LoginPage());
});
