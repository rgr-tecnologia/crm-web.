import { Lead } from "@/app/_types/lead/Lead";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadsListActions } from "./LeadsListActions";

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
                borderLeft: "4px solid",
                borderColor: "primary.main",
              }}
            >
              <CardContent>
                <Grid
                  container
                  justifyContent={"space-between"}
                  direction={"row"}
                  spacing={2}
                >
                  <Grid item>
                    <Grid container direction={"column"} spacing={1}>
                      <Grid item>
                        <Typography variant="body1" fontWeight={"bold"}>
                          {nomeFantasia}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <LeadsListActions lead={lead} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
