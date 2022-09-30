export interface MarkDownElement {
  type: TagType;
  content: string;
}

export enum TagType {
  h1,
  h2,
  hr,
  any
}
