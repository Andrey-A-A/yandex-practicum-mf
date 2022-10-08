require('babel-core/register');
export { ServerErrorPage as default } from './500';

import {ServerErrorPage} from './500';
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ServerErrorPage());
});