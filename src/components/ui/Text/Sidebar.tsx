import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface SidebarItem {
  name: string;
  content: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const navBackgroud = useColorModeValue("white", "theme.lightGray")

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);


  return (
    <Flex>
      <Box
        bg={navBackgroud}
        borderRight="1px solid"
        w="60"
        minH="100vh"
        pos="relative"
        zIndex={10}
        sx={{
          "@media screen and (max-width: 480px)": {
            position: "absolute",
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
            width: "100%",
          },
        }}
      >
        <Box p="4">
          <IconButton
            aria-label="Close menu"
            icon={<CloseIcon />}
            display={{ md: "none" }}
            onClick={onClose}
            variant="outline"
            colorScheme="whiteAlpha"
            size="sm"
          />
        </Box>
        <Stack spacing={4} p="4">
          {items.map((item) => (
            <Box
              key={item.name}
              p="2"
              rounded="md"
              _hover={{
                bg: useColorModeValue("theme.lightGray", "theme.dark"),
                color: "white",
                cursor: "pointer",
              }}
              bg={selectedItem?.name === item.name ? "theme.blue" : "none"}
              borderRadius="md" border="1px solid"
              onClick={() => setSelectedItem(item)}
            >
              <Text>{item.name}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box p="4" flex="1">
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ md: "none" }}
            onClick={onOpen}
            variant="outline"
            colorScheme="whiteAlpha"
            size="sm"
          />
        {selectedItem?.content}
      </Box>
    </Flex>
  );
};

export default Sidebar;