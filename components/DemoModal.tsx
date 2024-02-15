import { ModalFC, getModalVariables } from "@/features/modal";

export const DemoModal: ModalFC<{ vol: number }> = ({ searchParams, vol }) => {
  console.log("Render DemoModal");
  const variables = getModalVariables(searchParams);

  return (
    <div>
      <p>{JSON.stringify(variables)}</p>
      <p>Vol: {vol}</p>
      <ul>
        <li>Eu est laboris pariatur nostrud cupidatat quis.</li>
        <li>Elit sit voluptate aliquip sit est ut pariatur amet.</li>
        <li>Mollit cupidatat adipisicing sit anim voluptate.</li>
      </ul>
      <ul>
        <li>Eu est laboris pariatur nostrud cupidatat quis.</li>
        <li>Elit sit voluptate aliquip sit est ut pariatur amet.</li>
        <li>Mollit cupidatat adipisicing sit anim voluptate.</li>
      </ul>
    </div>
  );
};
