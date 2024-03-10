import { Box, Typography } from "@mui/material";

type ListOrderIdentifierProps = {
  index: number;
};

export function ListOrderIdentifier(props: ListOrderIdentifierProps) {
  const { index } = props;

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "50%",
        padding: "0.2rem 0.5rem",
      }}
    >
      <Typography
        variant="body2"
        fontWeight={"bold"}
        sx={{
          color: "white",
        }}
      >
        {index + 1}
      </Typography>
    </Box>
  );
}
