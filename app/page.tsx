import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { ModalProvider, setModalHref } from "@/features/modal";

export default function Home({
  params,
  searchParams,
}: {
  params: { [key: string]: string };
  searchParams: undefined;
}) {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <p>
        Non proident cupidatat sunt sit duis consequat exercitation id labore
        nulla eiusmod sunt ipsum cupidatat. Voluptate officia eiusmod minim
        excepteur ipsum occaecat adipisicing qui commodo. Aliquip amet aliquip
        nisi est anim veniam ex quis nulla duis qui dolor. Voluptate sunt fugiat
        minim dolor nostrud id deserunt ipsum ipsum reprehenderit pariatur
        minim. In incididunt commodo ex nisi qui esse reprehenderit elit sint
        officia excepteur. Consequat est non reprehenderit sint et ea veniam.
      </p>
      <Link href={setModalHref(searchParams, { title: "Super2" })}>
        <button>Open modal2</button>
      </Link>

      <ModalProvider searchParams={searchParams} />
    </main>
  );
}
