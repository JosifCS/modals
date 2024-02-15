export const KEYS = {
  TITLE: "modalTitle",
  MODAL_ID: "modalId",
  VARIABLES: "modalVar",
} as const;

export type SetModalHrefOpts = {
  variables?: { [key: string]: string };
  modalId?: string;
  title?: string;
};

export const setModalHref = (
  searchParams: unknown,
  { title, modalId, variables }: SetModalHrefOpts
) => {
  const urlParams = new URLSearchParams(searchParams as any);
  setString(urlParams, KEYS.TITLE, title);
  setString(urlParams, KEYS.MODAL_ID, modalId);
  setVariables(urlParams, variables);

  return `?${urlParams.toString()}`;
};

const setString = (params: URLSearchParams, key: string, value?: string) => {
  if (value == undefined) params.delete(key);
  else params.set(key, encodeURIComponent(value));
};

const setVariables = (
  params: URLSearchParams,
  value?: { [key: string]: string }
) => {
  if (value == undefined) params.delete(KEYS.VARIABLES);
  else params.set(KEYS.VARIABLES, encodeURIComponent(JSON.stringify(value)));
};
