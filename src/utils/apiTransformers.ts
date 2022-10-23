import { UserDTO, ChatDTO } from '../api/types';


export const transformUser = (data: UserDTO): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar,
    phone: data.phone,
    email: data.email,
  };
};

export const transformChat = (data: ChatDTO): Chat => {
  return {
    id: data.id,
    title: data.title,
    avatar: data.avatar,
    createdBy: data.created_by,
    unreadCount: data.unread_count,
    lastMessage: data.last_message,
  };
};


export function dateTransformer(time: string) {
  const date = new Date(time);
  
  
  const currentDate = new Date(Date.now());
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return `${hours}:${minutes}`
}

