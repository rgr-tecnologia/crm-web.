import { Lead } from "@/app/_types/lead/Lead";
import { Card, CardContent, Grid, Typography } from "@mui/material";

type LeadsListProps = {
  leads: Lead[];
};

export function LeadsList({ leads }: LeadsListProps) {
  if (!leads.length) {
    return (
      <Grid item>
        <Typography variant="body2">Nenhum lead encontrado</Typography>
      </Grid>
    );
  }
  return (
    <>
      {leads.map((lead) => {
        const { nomeFantasia } = lead;
        return (
          <Grid item key={lead.id}>
            <Card
              sx={{
                width: "100%",
              }}
            >
              <CardContent>
                <Typography variant="body2">{nomeFantasia}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
