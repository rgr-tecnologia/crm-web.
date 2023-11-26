import { Grid } from "@mui/material";
import { SignInForm } from "../../components/SigninForm";

export default function Page() {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      <Grid item>
        <SignInForm />
      </Grid>
    </Grid>
  );
}
