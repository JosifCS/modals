export const KEYS = {
  CLOSE: "modal",
  TITLE: "modalTitle",
} as const;

export type SetModalHrefOpts = {
  close?: boolean;
  title?: string;
};

export const setModalHref = (
  searchParams: unknown,
  { close = false, title }: SetModalHrefOpts
) => {
  const params = new URLSearchParams(searchParams as any);
  setString(params, KEYS.CLOSE, close ? undefined : "1");
  setString(params, KEYS.TITLE, title);

  return `?${params.toString()}`;
};

const setString = (params: URLSearchParams, key: string, value?: string) => {
  if (value == undefined) params.delete(key);
  else params.set(key, encodeURIComponent(value));
};
