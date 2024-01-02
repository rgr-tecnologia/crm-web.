import { SignUpForm } from "@/app/_components/forms/auth/SignUpForm";
import { Container, Grid } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  );
}
