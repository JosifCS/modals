import styles from "./page.module.css";
import { ModalLink, ModalsProvider } from "@/features/modal";
import { DemoContent } from "@/components/DemoContent";

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
      <ModalLink
        searchParams={searchParams}
        modalId="01"
        title="Modal s nadpisem a čočkou"
      >
        <button>Open modal 1</button>
      </ModalLink>
      <ModalLink
        searchParams={searchParams}
        modalId="02"
        title="Modal bez čočky"
      >
        <button>Open modal 2</button>
      </ModalLink>

      <ModalsProvider searchParams={searchParams}>
        <div id="01">
          <DemoContent label="Ten navždy první" />
        </div>
        <div id="02">
          <DemoContent label="Enim laborum sint" />
        </div>
      </ModalsProvider>
    </main>
  );
}
