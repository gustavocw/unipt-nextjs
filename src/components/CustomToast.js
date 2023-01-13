import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CustomToastHook() {
  const [customToast, setCustomToast] = useState(null);
  const toast = useToast();

  useEffect(() => {
    if (customToast) {
      const {
        title = "",
        description = "",
        status = "success",
        duration = 4000,
        isClosable = true,
        position = "bottom-right",
      } = customToast;

      toast({
        title: title,
        description: description,
        status: status,
        duration: duration,
        position: position,
        isClosable: isClosable,
      });
    }
  }, [customToast, setCustomToast]);

  return [customToast, setCustomToast];
}
