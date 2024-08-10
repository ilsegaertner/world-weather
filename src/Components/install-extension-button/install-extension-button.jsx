import React from "react";
import { Button } from "@radix-ui/themes";

const InstallExtensionButton = () => {
  const installExtension = () => {
    const extensionUrl =
      "https://chrome.google.com/webstore/detail/your-extension-id";

    window.open(extensionUrl, "_blank");
  };

  return (
    <Button
      variant="solid"
      highContrast
      className="right-10 absolute"
      onClick={installExtension}
    >
      Install Chrome Extension
    </Button>
  );
};

export default InstallExtensionButton;
