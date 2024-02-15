import { KEYS } from "..";

export const getModalVariables = (
  searchParams: unknown
): { [key: string]: string } | null => {
  const params = new URLSearchParams(searchParams as any);
  const value = params.get(KEYS.VARIABLES);
  return value ? JSON.parse(decodeURIComponent(value)) : null;
};
