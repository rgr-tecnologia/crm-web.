import { SnackbarProps } from "@mui/material";
import { BaseNotification } from "./BaseNotification";

type SuccessNotificationProps = {
  message: string;
  onClose?: () => void;
  open: boolean;
};

export function SuccessNotification(props: SuccessNotificationProps) {
  const { message, ...rest } = props;

  return <BaseNotification {...rest} severity="success" message={message} />;
}
