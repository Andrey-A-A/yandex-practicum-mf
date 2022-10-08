require('babel-core/register');
export { ChangingProfilePage as default } from './changingProfile';

import {ChangingProfilePage} from "./changingProfile";
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ChangingProfilePage());
});