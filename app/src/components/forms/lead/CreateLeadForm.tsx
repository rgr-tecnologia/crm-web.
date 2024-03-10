"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadFormBase } from "./LeadFormBase";
import { CreateLead } from "@/app/_types/lead/CreateLead";
import { createLead } from "@/app/_lib/utils/lead/createLead";

type CreateLeadFormProps = {};

export const CreateLeadForm = (props: CreateLeadFormProps) => {
  const router = useRouter();

  const onSubmit = async (data: CreateLead) => {
    try {
      await createLead(data);

      router.refresh();
      router.push("/leads");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} direction={"column"}>
          <Grid item>
            <Typography variant="h6">Novo lead</Typography>
          </Grid>
          <Grid item>
            <LeadFormBase onSubmit={onSubmit} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
