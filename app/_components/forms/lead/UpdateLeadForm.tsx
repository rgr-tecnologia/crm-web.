"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { LeadFormBase } from "./LeadFormBase";
import { CreateLead } from "@/app/_types/lead/CreateLead";
import { updateLead } from "@/app/_lib/utils/lead/updateLead";
import { Lead } from "@/app/_types/lead/Lead";

type UpdateLeadFormProps = {
  lead: Lead;
};

export const UpdateLeadForm = (props: UpdateLeadFormProps) => {
  const { lead } = props;
  const { id } = lead;

  const router = useRouter();

  const onSubmit = async (data: CreateLead) => {
    try {
      await updateLead(id, data);

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
            <LeadFormBase onSubmit={onSubmit} defaultValues={lead} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
