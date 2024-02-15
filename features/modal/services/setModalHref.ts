export const KEYS = {
  TITLE: "modalTitle",
  MODAL_ID: "modalId",
  DATA: "modalData",
} as const;

export type SetModalHrefOpts = {
  data?: { [key: string]: string };
  modalId?: string;
  title?: string;
};

export const setModalHref = (
  searchParams: unknown,
  { title, modalId, data }: SetModalHrefOpts
) => {
  const params = new URLSearchParams(searchParams as any);
  setString(params, KEYS.TITLE, title);
  setString(params, KEYS.MODAL_ID, modalId);
  setData(params, data);

  return `?${params.toString()}`;
};

const setString = (params: URLSearchParams, key: string, value?: string) => {
  if (value == undefined) params.delete(key);
  else params.set(key, encodeURIComponent(value));
};

const setData = (
  params: URLSearchParams,
  value?: { [key: string]: string }
) => {
  if (value == undefined) params.delete(KEYS.DATA);
  else params.set(KEYS.DATA, encodeURIComponent(JSON.stringify(value)));
};
