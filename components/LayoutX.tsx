import { Layout, LayoutProps } from "@/features/layout";
import { IconAbacus, IconCircle, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export const LayoutX = (prop: LayoutProps) => {
  return (
    <Layout
      layoutProps={prop}
      link={Link}
      menu={[
        { icon: IconCircle, title: "Home", url: "/" },
        {
          icon: IconCircle,
          title: "Many childs",
          items: [
            {
              icon: IconPlus,
              title: "Esse voluptat",
              items: [
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/a" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/b" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/c" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/d" },
              ],
            },
            { icon: IconAbacus, title: "Esse voluptat", url: "/list/amazon1" },
            { icon: IconAbacus, title: "Esse voluptat", url: "/list/amazon2" },
            { icon: IconAbacus, title: "Esse voluptat", url: "/list/amazon3" },
          ],
        },
        {
          icon: IconCircle,
          title: "One children",
          items: [
            { icon: IconPlus, title: "Esse voluptat", url: "/demo3/sub" },
          ],
        },
        { icon: IconCircle, title: "Subpage", url: "/subpage" },
      ]}
      user={{ avatar: "/", info: "Descriprion", name: "User" }}
      logoutUrl="/"
      profileUrl="/"
    >
      {prop.children}
    </Layout>
  );
};
