import React, { useId } from "react";
import styles from "./aside.module.scss";
import {
  CsIcon,
  IconLogout,
  IconNav,
  IconProfile,
} from "@ceskysoftware/components/icons";
import { AsideItem, AsideItemIntern, AsideItemProps } from "./AsideItem";

/** {@link Aside} parameters. */
export type AsideProps = {
  /** Logo at the top of the menu. It can be a *CsIcon* or a URL to an image. */
  logo?: CsIcon | string;
  /** User information at the bottom of the menu. */
  user: AsideUserProps;
  /** The URL of the logout page. */
  logoutUrl: string;
  /** URL address of the user's profile page (for example, with settings). */
  profileUrl: string;
  /** Individual items in the menu. They can be nested within each other (a maximum of three levels is recommended).
   * Each menu item can have `url` or any `onClick` action. */
  menu: AsideItemProps[];
  /** Language customization. */
  locales?: {
    /** Default value `"Benutzerprofil"`. */
    userProfile?: string;
    /** Default value `"Abmeldung"`. */
    logout?: string;
  };
};

/** User information at the bottom of the menu. */
export type AsideUserProps = {
  /** User name. */
  name: string;
  /** Short additional information (one or two words) about the user (shown under `name`). */
  info: string;
  /** The URL address of the user's profile photo. */
  avatar: string;
};

/**
 * A dark narrow menu located on the left side of the page.
 * @param param0 {@link AsideProps}.
 */
export const Aside = ({
  logo: Logo,
  user,
  menu,
  locales,
  logoutUrl,
  profileUrl,
}: AsideProps) => {
  const id = useId();
  const idCh1 = `${id}-ch1`;
  const idCh2 = `${id}-ch2`;

  const footerItems = new Array<Omit<AsideItemIntern, "level">>(
    {
      icon: IconProfile,
      title: locales?.userProfile ?? "Benutzerprofil",
      url: profileUrl,
    },
    {
      icon: IconLogout,
      title: locales?.logout ?? "Abmeldung",
      url: logoutUrl,
    }
  );

  return (
    <>
      <input type="checkbox" className={styles.asideToggleCheck} id={idCh1} />
      <label htmlFor={idCh1} className={styles.asideToggle}>
        <IconNav />
      </label>

      <aside className={styles.aside}>
        {Logo != undefined && (
          <div className={styles.asideH}>
            <div className={styles.aside__brand}>
              <div>
                {typeof Logo == "string" ? (
                  <img src={Logo} style={{ width: 35, height: 35 }} />
                ) : Logo ? (
                  <Logo />
                ) : null}
              </div>
            </div>
          </div>
        )}

        <div className={styles.asideB}>
          <nav aria-label="asideNav">
            <ul className={styles.asideNav}>
              {menu.map((e, i) => {
                return <AsideItem key={i} level={0} {...e} />;
              })}
            </ul>
          </nav>
        </div>

        <input type="checkbox" className={styles.asideFCheck} id={idCh2} />
        <label htmlFor={idCh2} className={styles.asideF}>
          <div className={styles.aside_user}>
            <div className={styles.aside_user__avatar}>
              <img src={user.avatar} className="img-fluid" />
            </div>
            <div className={styles.aside_user__info}>
              <p className={styles.aside_user__info__name}>
                <strong>{user.name}</strong>
              </p>
              <p className={styles.aside_user__info__post}>{user.info}</p>
            </div>
          </div>
          <div className={styles.asideFProfile}>
            <ul className={styles.asideNav} style={{ display: "block" }}>
              {footerItems.map((e, i) => {
                return <AsideItem key={i} level={0} {...e} />;
              })}
            </ul>
          </div>
        </label>
      </aside>
    </>
  );
};
