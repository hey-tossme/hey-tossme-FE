import ReactDom from "react-dom";
import { PortalProps } from "./_Portal.interface";

const ModalPortal = ({ children }: PortalProps) => {
    const el = document.getElementById("modal-root") as HTMLElement;
    return ReactDom.createPortal(children, el);
};

export default ModalPortal;
