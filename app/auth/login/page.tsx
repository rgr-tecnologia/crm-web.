import { Grid } from "@mui/material";
import { LoginForm } from "../../_components/forms/auth/LoginForm";

export default function Page() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
