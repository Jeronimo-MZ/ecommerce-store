import { PreviewModal } from "@/components/preview-modal";

import { BaseClientProvider } from "./base-client-provider";

export const ModalProvider = () => {
  return (
    <BaseClientProvider>
      <PreviewModal />
    </BaseClientProvider>
  );
};
