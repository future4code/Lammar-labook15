export enum POST_TYPES {
  NORMAL = "Normal",
  EVENT = "Evento"
}

export type post = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date
}

export interface PostInputDTO {
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
}