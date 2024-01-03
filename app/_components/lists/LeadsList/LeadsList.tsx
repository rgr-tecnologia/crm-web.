"use client";

import { Lead } from "@/app/_types/lead/Lead";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
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
    <Grid container spacing={2}>
      {orderedLeads.map((lead, index) => {
        const { nomeFantasia, createdAt, updatedAt } = lead;
        return (
          <Grid item key={lead.id} xs={12}>
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
                  direction={"row"}
                  spacing={2}
                  justifyContent={"space-around"}
                >
                  <Grid item>
                    <ListOrderIdentifier index={index} />
                  </Grid>
                  <Grid container item spacing={1} direction={"column"} xs={10}>
                    <Grid item>
                      <Typography variant="caption">Nome Fantasia</Typography>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {nomeFantasia}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      container
                      direction={"row"}
                      justifyContent={"space-between"}
                    >
                      <Grid container item direction={"row"} spacing={1} xs={4}>
                        <Grid item>
                          <Typography variant="caption">
                            Data de criação
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {createdAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container item direction={"row"} spacing={1} xs>
                        <Grid item>
                          <Typography variant="caption">
                            Data de atualização
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {updatedAt.toLocaleDateString()}
                          </Typography>
                        </Grid>
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
    </Grid>
  );
}
