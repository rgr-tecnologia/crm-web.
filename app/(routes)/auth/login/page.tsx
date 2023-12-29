import { LoginForm } from "@/app/_components/forms/auth/LoginForm";
import { Grid } from "@mui/material";

export default function Page() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
