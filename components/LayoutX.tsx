import { CsLayout, LayoutProps } from "@/features/layout";
import {
  IconAdd,
  IconAmazonPay,
  IconCircle,
} from "@ceskysoftware/components/icons";

export const LayoutX = (prop: LayoutProps) => {
  return (
    <CsLayout
      layoutProps={prop}
      current="router/page/url"
      menu={[
        { icon: IconCircle, title: "Esse voluptat", url: "/demo" },
        {
          icon: IconCircle,
          title: "Many childs",
          items: [
            {
              icon: IconAdd,
              title: "Esse voluptat",
              items: [
                { icon: IconCircle, title: "Voluptat 3", url: "/demo" },
                { icon: IconCircle, title: "Voluptat 3", url: "/demo" },
                { icon: IconCircle, title: "Voluptat 3", url: "/demo" },
                { icon: IconCircle, title: "Voluptat 3", url: "/demo" },
              ],
            },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
            { icon: IconAmazonPay, title: "Esse voluptat", url: "/demo" },
          ],
        },
        {
          icon: IconCircle,
          title: "One children",
          items: [{ icon: IconAdd, title: "Esse voluptat", url: "/demo" }],
        },
        { icon: IconCircle, title: "Esse voluptat", url: "/demo" },
        { icon: IconCircle, title: "Esse voluptat", url: "/demo" },
        { icon: IconCircle, title: "Esse voluptat", url: "/demo" },
      ]}
      user={{ avatar: "/", info: "", name: "User" }}
      logoutUrl="/"
      profileUrl="/"
    >
      {prop.children}
    </CsLayout>
  );
};
