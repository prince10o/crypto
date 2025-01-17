import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
