import { Grid } from "@mui/material";
import { SignInForm } from "../../_components/forms/SigninForm";

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
