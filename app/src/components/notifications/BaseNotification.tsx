import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

type BaseNotificationProps = {
  message: string;
  severity: "success" | "info" | "warning" | "error";
  onClose?: () => void;
  open: boolean;
};

export function BaseNotification(props: BaseNotificationProps) {
  const { message, severity, onClose, open } = props;

  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
