require('babel-core/register');
export { NotFoundPage as default } from './404';

import {NotFoundPage} from './404';
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new NotFoundPage());
});