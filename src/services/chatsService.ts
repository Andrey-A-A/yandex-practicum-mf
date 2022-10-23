import { ChatDTO, ChatsDTO, TokenDTO } from '../api/types';
import { chatsAPI } from '../api/chats';
import type { Dispatch } from '../core/Store';
import { apiHasError } from '../utils';
import { transformChat } from '../utils/apiTransformers'
import type { ChatUpRequest, AddUserRequest, DeleteUserRequest, GetTokenRequest} from '../api/chats';

type ChatsRequestData = {
  id: number,
  title: string,
  avatar: string | null,
  createdBy: number,
  unreadCount: number,
  lastMessage: string | null
};

export const getChatsList = async (
  dispatch: Dispatch<AppState>,
  state: AppState  
) => {
  try {
    const resp: any = await chatsAPI.chatsList();
    const responseChats = resp.response as ChatsDTO;
    
    dispatch({ isLoading: false, loginFormError: null });

    if (apiHasError(responseChats)) {
      console.log('Не смогли получить список чатов');
      return;
    }
    
    const chatsTransformed = responseChats.map((chat: ChatDTO) => {
      return transformChat(chat);
  });
    
    dispatch({ chats: chatsTransformed as Chats});
  } catch(err) {
    console.error(err)
  }
};

export const chatsUp = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: ChatUpRequest,
) => {
  
  dispatch({ isLoading: true });
  const chatsUpResponse: any = await chatsAPI.chatsUp(action)
  
  if (apiHasError(chatsUpResponse)) {
    console.log('Не смогли создать чат');
    return;
  }
  getChatsList(dispatch, state);
}

export const addUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: AddUserRequest,
) => {
  const addUserResponse = await chatsAPI.addUser(action)

  if (apiHasError(addUserResponse)) {
    console.log('Не смогли добавить пользователя в чат', addUserResponse.reason);
    return;
  } 

  console.log('Пользователь добавился');
  
  getChatsList(dispatch, state)
  
}

export const deleteUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: DeleteUserRequest,
) => {
  const deleteUserResponse = await chatsAPI.deleteUser(action)

  if (apiHasError(deleteUserResponse)) {
    console.log('Не смогли удалить пользователя из чата', deleteUserResponse.reason);
    return;
  } 

  console.log('Пользователь удален');
  

  getChatsList(dispatch, state);
}


export const getToken = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: number,
  ) => {

  const getTokenResponse: any = await chatsAPI.getToken(action)
  const responseToken = getTokenResponse.response as TokenDTO;

  console.log('getTokenResponse=', getTokenResponse);
  console.log('responseToken=', responseToken);

  if (apiHasError(getTokenResponse)) {
    console.log('Не смогли получить токен', getTokenResponse.reason);
    return;
  } 

  console.log('Токен получен');
  getChatsList(dispatch, state);

}