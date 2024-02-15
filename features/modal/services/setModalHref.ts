"use server";

export type SetModalHrefOpts = {
  close?: boolean;
  title?: string;
};

export const setModalHref = (
  searchParams: unknown,
  { close = false, title }: SetModalHrefOpts
) => {
  //const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  if (!close) {
    params.set("modal", "1");
    if (title) params.set("modalTitle", title);
  } else {
    params.delete("modal");
    params.delete("modalTitle");
  }
  return `?${params.toString()}`;
};
