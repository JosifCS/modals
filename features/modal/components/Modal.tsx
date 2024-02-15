import { FC, ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  modalId: string;
  title?: string;
};

export const Modal = ({ children }: ModalProps) => {
  return children;
};

export type ModalFC<OtherParams extends object = {}> = FC<
  {
    searchParams: unknown;
    modalId: string;
    title?: string;
  } & OtherParams
>;
