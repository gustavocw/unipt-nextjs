import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useRef } from "react";

const CustomAlertDialog = ({
  children,
  cancelButtonText = "Cancel",
  cancelButtonScheme = "red",
  cancelButtonStyles = {},
  confirmButtonText = "OK",
  cofirmButtonScheme = "blue",
  confirmButtonStyles = {},
  isOpen = false,
  modalCustomProps = {},
  onCancel = () => {},
  onConfirm = () => {},
  onlyOk,
  title = "",
}) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onCancel}
      {...modalCustomProps}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{children}</AlertDialogBody>

          <AlertDialogFooter>
            <Stack direction={"row"} spacing={3}>
              <Button
                onClick={onConfirm}
                ml={3}
                colorScheme={cofirmButtonScheme}
                {...confirmButtonStyles}
              >
                {confirmButtonText}
              </Button>
              {!onlyOk && (
                <Button
                  ref={{}}
                  onClick={onCancel}
                  colorScheme={cancelButtonScheme}
                  {...cancelButtonStyles}
                >
                  {cancelButtonText}
                </Button>
              )}
            </Stack>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default CustomAlertDialog;
