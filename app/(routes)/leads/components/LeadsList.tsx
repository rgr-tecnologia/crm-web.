"use client";

import { Lead } from "@/src/types/lead/Lead";
import { Button, Grid, Typography } from "@mui/material";

import { useState } from "react";
import { LeadsAutoComplete } from "@/src/components/autocomplete/LeadsAutoComplete";
import Link from "next/link";
import { LeadsCardList } from "./LeadsCardList";

type LeadsListProps = {
  leads: Lead[];
};

const orderLeads = (leads: Lead[]) => {
  return leads.sort((a, b) => {
    const aDate = new Date(a.createdAt);
    const bDate = new Date(b.createdAt);
    return bDate.getTime() - aDate.getTime();
  });
};

export function LeadsList({ leads }: LeadsListProps) {
  const [filteredClientes, setFilteredClientes] = useState<Lead[]>(leads);

  const onChange = (lead: Lead) => {
    setFilteredClientes([lead]);
  };

  const onClear = () => {
    setFilteredClientes(leads);
  };

  const content = leads.length ? (
    <LeadsCardList leads={orderLeads(filteredClientes)} />
  ) : (
    <Typography variant="body2">Nenhum lead encontrado</Typography>
  );

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      spacing={2}
    >
      <Grid
        container
        item
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item xs={6}>
          <LeadsAutoComplete
            leads={leads}
            onChange={onChange}
            onClear={onClear}
          />
        </Grid>
        <Grid item>
          <Link href={"/leads/novo"} passHref>
            <Button variant={"contained"}>Novo Lead</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: "100%",
        }}
      >
        {content}
      </Grid>
    </Grid>
  );
}
