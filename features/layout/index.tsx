import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import { Aside, AsideProps } from "../aside";

/** Layout properties unique to each page. */
export type LayoutProps = PageInfo & {
  /** Page content. */
  children: ReactNode;
};

/** Layout properties unique to each page. */
type PageInfo = {
  /** Page footer content. */
  footer?: React.ReactNode;
  /** No main menu on the left. */
  noAside?: boolean;
  /** All the indentation around the content of the page is removed and it is then over the entire page (even behind the menu). */
  fullscreen?: boolean;
};

type CsLayoutProps = AsideProps & {
  children: React.ReactNode;
  layoutProps: PageInfo;
};

/** Layout with menu and page content.
 * @example
 * const Layout = (prop: LayoutProps) => {
 *    return (
 *      <CsLayout
 *        layoutProps={prop}
 *        current="router/page/url"
 *        menu={[]}
 *        user={{}}
 *        webTitle="WebTitle"
 *      >
 *        {prop.children}
 *      </CsLayout>
 *    );
 *  };
 * @description Use: Create a new `MyLayout` component in the Project (for example),
 * in which basic data will be defined. `Layout` will then be used
 * on individual pages and will have parameters of type {@link LayoutProps}.
 */
export const CsLayout = ({
  layoutProps: { footer, noAside = false, fullscreen = false },
  children,
  menu,
  user,
  locales,
  logo,
  logoutUrl,
  profileUrl,
  link,
}: CsLayoutProps) => {
  return (
    <>
      {noAside ? (
        children
      ) : (
        <>
          <Aside
            user={user}
            logo={logo}
            link={link}
            menu={menu}
            locales={locales}
            logoutUrl={logoutUrl}
            profileUrl={profileUrl}
          />

          <div
            className={[styles.layout, fullscreen ? "" : styles.wrapper].join(
              " "
            )}
            //data-offcanvas={sideOffcanvas ?? ""}
          >
            <main>
              <section>
                <div className={fullscreen ? "" : styles.containerFluid}>
                  {children}
                </div>
              </section>
            </main>
            {footer && <footer role="contentinfo">{footer}</footer>}
          </div>
        </>
      )}
    </>
  );
};
