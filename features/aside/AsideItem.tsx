import React, { useId } from "react";
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
  url?: string;
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
  const id = useId();
  if (hidden) return <></>;
  if (url != undefined)
    return (
      <li
        className={`${styles.asideNavItem} ${
          current == url ? styles.active : ""
        }`}
      >
        <Link href={url}>
          {level < 2 && <Icon size={19} fill="#e7eef8" />}
          <span className={styles.text}>{title}</span>
        </Link>
      </li>
    );

  return (
    <li
      className={`${styles.asideNavItem} ${styles.withSubs} ${
        /*isExpanded && styles.active*/ ""
      }`}
    >
      <input id={id} type="checkbox" hidden />
      <label htmlFor={id} role="button" className={styles.withSubs}>
        <div className={styles.info}>
          <Icon size={19} fill="#e7eef8" />
          <span className={styles.text}>{title}</span>
        </div>
        <IconArrowRight className={styles.arrow} />
      </label>

      <ul
        className={`${styles.sublist} `} /*{...getCollapseProps()}*/
        /*style={{ display: "block" }}*/
      >
        {items?.map((e, i) => {
          return (
            <AsideItem key={i} current={current} level={level + 1} {...e} />
          );
        })}
      </ul>
    </li>
  );
};
