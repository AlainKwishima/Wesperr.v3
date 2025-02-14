import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export default function Wallet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Add a button to open the modal */}
      <button onClick={() => setIsOpen(true)}>Open Wallet</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
        <ModalOverlay />
        <ModalContent maxW="800px" maxH="90vh">
          <ModalHeader>
            WeSperr-Wallet Prototype
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://embed.figma.com/proto/fIla6657VmWc7nN3NtM0kA/WeSperr?page-id=43%3A4&node-id=301-4750&p=f&viewport=624%2C-178%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=243%3A19001&embed-host=share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}