export const DemoContent = ({ label }: { label: string }) => {
  console.log("Render DemoContent - " + label);
  return (
    <div>
      <h6>{label}</h6>
      <ul>
        <li>Eu est laboris pariatur nostrud cupidatat quis.</li>
        <li>Elit sit voluptate aliquip sit est ut pariatur amet.</li>
        <li>Mollit cupidatat adipisicing sit anim voluptate.</li>
      </ul>
      <p>
        Consectetur est minim aliquip voluptate ad in voluptate proident sit
        ullamco ut. Amet pariatur aute ex incididunt mollit laborum tempor aute
        velit eu dolor labore. Proident ipsum dolor irure consequat voluptate id
        reprehenderit sint non occaecat. Ipsum cupidatat esse nostrud aliquip do
        qui voluptate excepteur aute ullamco aliquip incididunt dolore duis. Non
        proident adipisicing enim laboris. Cupidatat voluptate duis exercitation
        duis. Ea ipsum dolore pariatur veniam mollit irure dolore ex in anim.
      </p>
    </div>
  );
};
