import { DemoContent } from "@/components/DemoContent";
import { DemoModal } from "@/components/DemoModal";
import { Modal, ModalsProvider } from "@/features/modal";

export default function Modals({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <ModalsProvider searchParams={searchParams}>
      <Modal modalId="01">
        <DemoContent label="Ten navždy první" />
      </Modal>
      <Modal modalId="02" title="Původní titulek">
        <DemoContent label="Enim laborum sint" />
      </Modal>
      <DemoModal
        modalId="03"
        title="Demo FC modal"
        searchParams={searchParams}
        vol={55}
      />
    </ModalsProvider>
  );
}
