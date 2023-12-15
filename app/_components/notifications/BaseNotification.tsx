import { Alert, Snackbar } from "@mui/material";

type BaseNotificationProps = {
  message: string;
  severity: "success" | "info" | "warning" | "error";
  onClose: () => void;
};

export function BaseNotification(props: BaseNotificationProps) {
  const { message, severity, onClose } = props;

  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
