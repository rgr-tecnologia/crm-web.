"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadFormBase } from "./LeadFormBase";
import { createLead } from "../actions";
import { useState } from "react";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";
import { Cliente } from "@/src/types/cliente/Cliente";
import { CreateLead } from "@/src/types/Lead";

type CreateLeadFormProps = {
  clientes: Cliente[];
};

export const CreateLeadForm = (props: CreateLeadFormProps) => {
  const { clientes } = props;
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: CreateLead) => {
    try {
      await createLead(data);
      router.push("/leads");
    } catch (error) {
      setIsError(true);
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
              <LeadFormBase onSubmit={onSubmit} clientes={clientes} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {isError && (
        <ErrorNotification
          message="Erro ao cadastrar lead!"
          open={isError}
          onClose={() => setIsError(false)}
        />
      )}
    </>
  );
};
