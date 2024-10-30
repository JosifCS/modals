import React, { ForwardRefExoticComponent, RefAttributes, useId } from "react";
import styles from "./aside.module.scss";
import Link from "next/link";
import { Icon, IconChevronRight, IconProps as IP } from "@tabler/icons-react";

export type IconProps = ForwardRefExoticComponent<IP & RefAttributes<Icon>>;

/** {@link AsideItem} parameters. */
export type AsideItemIntern = {
  /** Label to the right next to the `icon`. */
  title: string;
  /** Icon. */
  icon: IconProps;
  /** URL. The value must be unique. */
  url?: string;
  /** If there are any items, it's a dropdown */
  items?: AsideItemProps[];
  /** Don't render this aside item. */
  hidden?: boolean;
  level: number;
  link: typeof Link;
};

export type AsideItemProps = Omit<
  AsideItemIntern,
  "level" | "current" | "onNavigate" | "link"
>;

export const AsideItem = ({
  title,
  icon: Icon,
  link: Link,
  url,
  level,
  items,
  hidden = false,
}: AsideItemIntern) => {
  const id = useId();
  if (hidden) return <></>;
  if (url != undefined)
    return (
      <li className={styles.asideNavItem}>
        <Link href={url} className={/*active ? styles.active : */ ""}>
          {level < 2 && <Icon size={19} />}
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
          <Icon size={19} />
          <span className={styles.text}>{title}</span>
        </div>
        <IconChevronRight className={styles.arrow} />
      </label>

      <ul
        className={`${styles.sublist} `} /*{...getCollapseProps()}*/
        /*style={{ display: "block" }}*/
      >
        {items?.map((e, i) => {
          return <AsideItem key={i} level={level + 1} link={Link} {...e} />;
        })}
      </ul>
    </li>
  );
};
