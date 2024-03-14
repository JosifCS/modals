import { CsLayout, LayoutProps } from "@/features/layout";
import {
  IconAdd,
  IconAmazon,
  IconCircle,
} from "@ceskysoftware/components/icons";
import Link from "next/link";

export const LayoutX = (prop: LayoutProps) => {
  return (
    <CsLayout
      layoutProps={prop}
      link={Link}
      menu={[
        { icon: IconCircle, title: "Home", url: "/" },
        {
          icon: IconCircle,
          title: "Many childs",
          items: [
            {
              icon: IconAdd,
              title: "Esse voluptat",
              items: [
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/a" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/b" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/c" },
                { icon: IconCircle, title: "Voluptat 3", url: "/list/a/d" },
              ],
            },
            { icon: IconAmazon, title: "Esse voluptat", url: "/list/amazon1" },
            { icon: IconAmazon, title: "Esse voluptat", url: "/list/amazon2" },
            { icon: IconAmazon, title: "Esse voluptat", url: "/list/amazon3" },
          ],
        },
        {
          icon: IconCircle,
          title: "One children",
          items: [{ icon: IconAdd, title: "Esse voluptat", url: "/demo3/sub" }],
        },
        { icon: IconCircle, title: "Subpage", url: "/subpage" },
      ]}
      user={{ avatar: "/", info: "", name: "User" }}
      logoutUrl="/"
      profileUrl="/"
    >
      {prop.children}
    </CsLayout>
  );
};
