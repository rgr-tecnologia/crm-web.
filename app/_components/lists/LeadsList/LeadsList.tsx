"use client";

import { Lead } from "@/app/_types/lead/Lead";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadsListActions } from "./LeadsListActions";
import { useEffect, useState } from "react";
import { ListOrderIdentifier } from "../ListOrderIdentifier/ListOrderIdentifier";

type LeadsListProps = {
  leads: Lead[];
};

export function LeadsList({ leads }: LeadsListProps) {
  const [orderedLeads, setOrderedLeads] = useState<Lead[]>(leads);

  const orderLeads = (leads: Lead[]) => {
    const orderedLeads = leads.sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      return bDate.getTime() - aDate.getTime();
    });
    setOrderedLeads(orderedLeads);
  };

  useEffect(() => {
    orderLeads(leads);
  }, [leads]);

  if (!leads.length) {
    return (
      <Grid item>
        <Typography variant="body2">Nenhum lead encontrado</Typography>
      </Grid>
    );
  }
  return (
    <>
      {orderedLeads.map((lead, index) => {
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
                  <Grid item container direction={"row"}>
                    <Grid item>
                      <ListOrderIdentifier index={index} />
                    </Grid>
                    <Grid item container direction={"column"}>
                      <Grid item>
                        <Typography variant="body1" fontWeight={"bold"}>
                          {nomeFantasia}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {`Criado em: ${lead.createdAt.toLocaleDateString()}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {`Atualizado em: ${lead.updatedAt.toLocaleDateString()}`}
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
