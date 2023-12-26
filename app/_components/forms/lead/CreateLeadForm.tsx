"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadFormBase } from "./LeadFormBase";
import { CreateLead } from "@/app/_types/lead/CreateLead";
import { createLead } from "@/app/_lib/lead/createLead";

type CreateLeadFormProps = {};

export const CreateLeadForm = (props: CreateLeadFormProps) => {
  const router = useRouter();

  const onSubmit = async (data: CreateLead) => {
    try {
      await createLead(data);

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item>
        <Typography variant="h6">Novo contrato</Typography>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container spacing={2} direction={"column"}>
              <Grid item>
                <LeadFormBase onSubmit={onSubmit} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
