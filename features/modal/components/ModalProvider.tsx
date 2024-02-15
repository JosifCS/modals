import Link from "next/link";
import { KEYS, setModalHref } from "..";

export const ModalProvider = ({ searchParams }: { searchParams: unknown }) => {
  const params = new URLSearchParams(searchParams as any);
  const close = params.get(KEYS.CLOSE) != "1";
  const title = getString(params, KEYS.TITLE);

  if (close) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        left: 100,
        right: 100,
        backgroundColor: "wheat",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
        <Link href={setModalHref(searchParams, { close: true })}>
          <button>X</button>
        </Link>
      </div>

      <div>Něco</div>
    </div>
  );
};

const getString = (params: URLSearchParams, key: string) => {
  const value = params.get(key);
  return value ? decodeURIComponent(value) : null;
};
