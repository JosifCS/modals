import React from "react";
import styles from "./aside.module.scss";
import { CsIcon, IconArrowRight } from "@ceskysoftware/components/icons";
import Link from "next/link";

/** {@link AsideItem} parameters. */
export type AsideItemIntern = {
  /** Label to the right next to the `icon`. */
  title: string;
  /** Icon. */
  icon: CsIcon;
  /** The relative path of the currently open page.
   * The `url` of the item should correspond to this value. */
  current: string;
  /** URL. The value must be unique. */
  url: string;
  /** If there are any items, it's a dropdown */
  items?: AsideItemProps[];
  /** Don't render this aside item. */
  hidden?: boolean;
  level: number;
};

export type AsideItemProps = Omit<
  AsideItemIntern,
  "level" | "current" | "onNavigate"
>;

export const AsideItem = ({
  title,
  icon: Icon,
  current,
  url,
  level,
  items,
  hidden = false,
}: AsideItemIntern) => {
  if (hidden) return <></>;
  else
    return items && items.length > 0 ? (
      <li>
        <div
          className={`${styles.asideNavItem} ${styles.asideNavItemSubnav} ${
            /*isExpanded && styles.active*/ ""
          }`}
          role="button"
          //{...getToggleProps()}
        >
          <div className={styles.asideNavItemInfo}>
            <Icon size={19} fill="#e7eef8" />
            <span className={styles.asideNavItem__text}>{title}</span>
          </div>
          <div className={styles.asideNavItemExtra}>
            <IconArrowRight className={styles.asideNavItemExtraArrow} />
          </div>
        </div>

        <ul
          className={`${styles.asideSubnav} ${
            /*isExpanded && styles.show*/ ""
          }`} /*{...getCollapseProps()}*/
          /*style={{ display: "block" }}*/
        >
          {items &&
            items.map((e, i) => {
              return (
                <AsideItem key={i} current={current} level={level + 1} {...e} />
              );
            })}
        </ul>
      </li>
    ) : (
      <li>
        <Link
          href={url}
          className={`${styles.asideNavItem} ${
            current == url ? styles.active : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          {level < 2 && <Icon size={19} fill="#e7eef8" />}
          <span className={styles.asideNavItem__text}>{title}</span>
        </Link>
      </li>
    );
};
