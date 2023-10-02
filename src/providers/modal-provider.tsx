import { PreviewModal } from "@/components/preview-modal";

import { ClientRender } from "./client-render";

export const ModalProvider = () => {
  return (
    <ClientRender>
      <PreviewModal />
    </ClientRender>
  );
};
