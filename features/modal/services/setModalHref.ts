export const KEYS = {
  CLOSE: "modal",
  TITLE: "modalTitle",
  ID: "modalId",
} as const;

export type SetModalHrefOpts = {
  close?: boolean;
  title?: string;
  conttentId?: string;
};

export const setModalHref = (
  searchParams: unknown,
  { close = false, title, conttentId }: SetModalHrefOpts
) => {
  const params = new URLSearchParams(searchParams as any);
  setString(params, KEYS.CLOSE, close ? undefined : "1");
  setString(params, KEYS.TITLE, title);
  setString(params, KEYS.ID, conttentId);

  return `?${params.toString()}`;
};

const setString = (params: URLSearchParams, key: string, value?: string) => {
  if (value == undefined) params.delete(key);
  else params.set(key, encodeURIComponent(value));
};
