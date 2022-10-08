require('babel-core/register');
export { RegistrationPage as default } from './registration';

import {RegistrationPage} from "./registration";
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new RegistrationPage());
});