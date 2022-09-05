export type ApiHeroEndpoint<TParams, TResponseBody, THeaders = unknown> = {
  id: string;
  [key: string]: string | number;
};
