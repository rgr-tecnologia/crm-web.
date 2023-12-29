import { SignInForm } from "@/app/_components/forms/auth/SigninForm";
import { Container, Grid } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <SignInForm />
        </Grid>
      </Grid>
    </Container>
  );
}
