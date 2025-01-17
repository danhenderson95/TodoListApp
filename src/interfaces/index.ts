export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
  createdTs: number;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}
