export type ApiHeroEndpoint<Params, ResponseBody, Headers = unknown> = {
  id: string;
  [key: string]: string | number;
};
