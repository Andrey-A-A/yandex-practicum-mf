require('babel-core/register');
export { ChangingPasswordPage as default } from './changingPassword';

import {ChangingPasswordPage} from "./changingPassword";
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ChangingPasswordPage());
});