require('babel-core/register');
export { ChatsPage as default } from './chats';

import {ChatsPage} from './chats';;
import renderDOM from "../../core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    renderDOM(new ChatsPage());
});
