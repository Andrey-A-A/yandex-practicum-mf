export type APIError = {
  reason: string;
};

export type UserDTO = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
};

export type ChatDTO = {
  id: number,
  title: string,
  avatar: string | null,
  created_by: number,
  unread_count: number,
  last_message: string | null
};

export type MessageDTO = {
  content: string | null,
  id: string,

}

export type ChatsDTO = ChatDTO[];

export type TokenDTO = {
  token: string
}
