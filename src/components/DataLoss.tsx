import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
  useModalContext,
} from "@chakra-ui/react";

const DataLoss = () => {
  const { onClose } = useModalContext();
  return (
    <>
      <ModalHeader>🚨 Attention: Data Loss Alert! 🚨</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>
          Dear WeSperr Users, I regret to inform you that an unexpected issue has
          led to the loss of data in the chats database.
          <br />
          <br />
          As the Team , We take full responsibility for this incident
          and sincerely apologize for any inconvenience it may cause.
          Unfortunately, this means that your chat history and associated data
          have been reset.
          <br />
          <br />We understand the frustration this may cause, and We are working
          tirelessly to rectify the situation and prevent such occurrences in
          the future.
          <br />
          <br />
          Best regards,
          <br /> WeSperr Team
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="blue"
          mr={3}
          borderRadius={"md"}
          onClick={() => onClose()}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  );
};

export default DataLoss;
