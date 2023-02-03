export enum POST_TYPES {
  NORMAL = "Normal",
  EVENT = "Evento"
}

export type post = {
  id: string,
  photo: string,
  description: string,
  type: "Evento" | "Normal"
  author_id: string
}

export interface PostInputDTO {
  photo: string,
  description: string,
  type: POST_TYPES,
  author_id: string 
}
