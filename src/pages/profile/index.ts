require('babel-core/register');
export { ProfilePage as default } from './profile';

import {ProfilePage} from "./profile";
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ProfilePage());
});
