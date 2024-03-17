import { Button, CircularProgress } from "@mui/material";

type LoadingButtonProps = {
  loading: boolean;
  children: React.ReactNode;
} & React.ComponentProps<typeof Button>;

export function LoadingButton(props: LoadingButtonProps) {
  const { children, loading, ...rest } = props;

  return (
    <Button {...rest} disabled={loading}>
      {loading ? (
        <>
          <CircularProgress
            size={24}
            sx={{
              color: "#6B7A90",
            }}
          />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
