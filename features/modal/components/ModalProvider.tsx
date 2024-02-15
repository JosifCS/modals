import Link from "next/link";
import { KEYS, setModalHref } from "..";
import { Children, ReactNode } from "react";

export type ModalProviderProps = {
  searchParams: unknown;
  children?: ReactNode;
};

export const ModalProvider = ({
  searchParams,
  children,
}: ModalProviderProps) => {
  const params = new URLSearchParams(searchParams as any);
  const close = params.get(KEYS.CLOSE) != "1";
  const title = getString(params, KEYS.TITLE);
  const contentId = getString(params, KEYS.ID);

  if (close) return null;

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
        <Link href={setModalHref(searchParams, { close: true })}>
          <button>X</button>
        </Link>
      </div>

      <div>
        {Children.toArray(children).find(
          (x) => (x as any).props?.id == contentId
        )}
      </div>
    </div>
  );
};

const getString = (params: URLSearchParams, key: string) => {
  const value = params.get(key);
  return value ? decodeURIComponent(value) : null;
};
