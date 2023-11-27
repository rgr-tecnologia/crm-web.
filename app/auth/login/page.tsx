import { Grid } from "@mui/material";
import { LoginForm } from "../../../components/LoginForm";

export default function Page() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
