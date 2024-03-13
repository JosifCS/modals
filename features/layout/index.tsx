import React, { ReactNode, useEffect } from "react";
import styles from "./layout.module.scss";
import { Aside, AsideProps } from "@ceskysoftware/components/client";

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
  /** If {@link noAside}=true, an "WebRendite - " is added before the title.
   * If {@link noAside}=false, then only the specified text is in the title.
   * The default title is "WebRendite". */
  title?: string;
  /** All the indentation around the content of the page is removed and it is then over the entire page (even behind the menu). */
  fullscreen?: boolean;
};

type CsLayoutProps = AsideProps & {
  children: React.ReactNode;
  webTitle: string;
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
 *        onNavigate={() => {}}
 *        user={{}}
 *        webTitle="WebTitle"
 *      >
 *        Id reprehenderit enim
 *      </CsLayout>
 *    );
 *  };
 * @description Use: Create a new `MyLayout` component in the Project (for example),
 * in which basic data will be defined. `Layout` will then be used
 * on individual pages and will have parameters of type {@link LayoutProps}.
 */
export const CsLayout = ({
  layoutProps: { footer, title, noAside = false, fullscreen = false },
  children,
  menu,
  user,
  current,
  webTitle,
  locales,
  logo,
  logoutUrl,
  profileUrl,
  onNavigate,
}: CsLayoutProps) => {
  useEffect(() => {
    //TODO: V reactu se nikdy nemanipuluje přímo s DOMem - vyřešit
    noAside
      ? document.body.classList.remove(styles.bgImg)
      : document.body.classList.add(styles.bgImg);

    document.title = title
      ? noAside
        ? title
        : `${webTitle} - ${title}`
      : webTitle;
  }, [noAside, title]);

  return (
    <>
      {noAside ? (
        children
      ) : (
        <>
          <Aside
            user={user}
            logo={logo}
            current={current}
            menu={menu}
            onNavigate={onNavigate}
            locales={locales}
            logoutUrl={logoutUrl}
            profileUrl={profileUrl}
          />

          <div
            className={[styles.layout, fullscreen ? "" : styles.wrapper].join(
              " "
            )}
            data-offcanvas={sideOffcanvas ?? ""}
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
