export interface BasicResponseModel<T = any> {
  code: number;
  data: T;
  error: object;
  message: string;
  status: boolean;
}