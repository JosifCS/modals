import Link from "next/link";
import { setModalHref } from "..";

export const ModalProvider = ({ searchParams }: { searchParams: unknown }) => {
  const params = new URLSearchParams(searchParams as any);
  const open = params.get("modal") == "1";
  const title = params.get("modalTitle");

  if (open)
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

  return null;
};
