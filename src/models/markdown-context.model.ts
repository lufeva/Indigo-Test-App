export interface MarkDown {
  textContent: string;
}

export interface IMarkDownContext {
  markDown: MarkDown;
  updateMarkDownContext: (textContent: string) => void;
}
