import { BaseNotification } from "./BaseNotification";

type ErrorNotificationProps = {
  message: string;
  onClose: () => void;
};

export function SuccessNotification(props: ErrorNotificationProps) {
  const { message, onClose } = props;

  return (
    <BaseNotification message={message} severity="error" onClose={onClose} />
  );
}
