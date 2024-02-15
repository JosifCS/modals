import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  modalId: string;
  title?: string;
};

export const Modal = ({ children, modalId, title }: ModalProps) => {
  return children;
};
