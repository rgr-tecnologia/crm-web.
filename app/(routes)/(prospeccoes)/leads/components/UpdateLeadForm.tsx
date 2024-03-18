"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadFormBase } from "./LeadFormBase";
import { CreateLead, Lead } from "@/src/types/Lead";
import { updateLead } from "../actions";
import { Cliente } from "@/src/types/cliente/Cliente";
import { useState } from "react";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";

type UpdateLeadFormProps = {
  lead: Lead;
  clientes: Cliente[];
};

export const UpdateLeadForm = (props: UpdateLeadFormProps) => {
  const { lead, clientes } = props;
  const { id } = lead;
  const router = useRouter();

  const [error, setError] = useState(false);

  const onSubmit = async (data: CreateLead) => {
    try {
      await updateLead(id, data);
      router.push("/leads");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h6">Novo lead</Typography>
            </Grid>
            <Grid item>
              <LeadFormBase
                onSubmit={onSubmit}
                defaultValues={lead}
                clientes={clientes}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {error && (
        <ErrorNotification
          message="Erro ao atualizar lead!"
          open={false}
          onClose={() => setError(false)}
        />
      )}
    </>
  );
};
