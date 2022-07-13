import React from 'react'
import { ModalOverlay, ModalHeader, ModalContent, ModalCloseButton,ModalBody,ModalFooter,Button,useDisclosure,Text } from "@chakra-ui/react";



const Modal = (props) => {
  const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

  return (
    <Modal blockScrollOnMount={false} isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete User(s)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text  mb='1rem'>
              Are you sure you want to delete these (3) users
            </Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
            Yes
            </Button>
            <Button colorScheme='red'>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default Modal