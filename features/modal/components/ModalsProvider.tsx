import Link from "next/link";
import { KEYS, ModalLink, setModalHref } from "..";
import { Children, ReactNode } from "react";

export type ModalsProviderProps = {
  searchParams: unknown;
  children?: ReactNode;
};

export const ModalsProvider = ({
  searchParams,
  children,
}: ModalsProviderProps) => {
  const params = new URLSearchParams(searchParams as any);
  const title = getString(params, KEYS.TITLE);
  const modalId = getString(params, KEYS.MODAL_ID);

  if (modalId == null) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        left: 100,
        right: 100,
        backgroundColor: "wheat",
        padding: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
        <ModalLink searchParams={searchParams}>
          <button>X</button>
        </ModalLink>
      </div>

      <div>
        {Children.toArray(children).find(
          (x) => (x as any).props?.id == modalId
        )}
      </div>
    </div>
  );
};

const getString = (params: URLSearchParams, key: string) => {
  const value = params.get(key);
  return value ? decodeURIComponent(value) : null;
};
