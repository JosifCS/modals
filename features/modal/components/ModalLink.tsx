import Link from "next/link";
import { SetModalHrefOpts, setModalHref } from "..";
import { ReactNode } from "react";

export type ModalLinkProps = {
  searchParams: unknown;
  children: ReactNode;
} & SetModalHrefOpts;

export const ModalLink = ({
  searchParams,
  children,
  ...props
}: ModalLinkProps) => {
  return <Link href={setModalHref(searchParams, props)}>{children}</Link>;
};
