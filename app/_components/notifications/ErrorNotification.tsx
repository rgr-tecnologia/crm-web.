import { BaseNotification } from "./BaseNotification";

type ErrorNotificationProps = {
  message: string;
  onClose?: () => void;
  open: boolean;
};

export function ErrorNotification(props: ErrorNotificationProps) {
  const { message, ...rest } = props;

  return <BaseNotification message={message} severity="error" {...rest} />;
}
