import { BaseNotification } from "./BaseNotification";

type SuccessNotificationProps = {
  message: string;
  onClose: () => void;
};

export function SuccessNotification(props: SuccessNotificationProps) {
  const { message, onClose } = props;

  return (
    <BaseNotification message={message} severity="success" onClose={onClose} />
  );
}
