"use client";

import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import { ClienteQueryProvider } from "@/app/_components/queryProviders/ClienteQueryProvider";
import { useState } from "react";
import { ClienteFormBase } from "@/app/_components/forms/cliente/ClienteFormBase";
import { useQuery } from "react-query";
import { getLeadById } from "@/app/_lib/lead/getLeadById";
import { RepresentanteFormBase } from "../representante/RepresentanteFormBase";
import { promoteLead } from "@/app/_lib/lead/promoteLead";
import { CreateCliente } from "@/app/_types/cliente/CreateCliente";
import { CreateRepresentante } from "@/app/_types/representante/CreateRepresentante";
import * as navigation from "next/navigation";

type PromoverLeadFormProps = {
  leadId: string;
};

export default function PromoverLeadForm(props: PromoverLeadFormProps) {
  const { leadId } = props;

  const [activeStep, setActiveStep] = useState(0);

  const [cliente, setCliente] = useState<CreateCliente>();

  const router = navigation.useRouter();

  const handleNext = (formData: CreateCliente) => {
    setCliente(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmit = async (formData: CreateRepresentante) => {
    console.log("fetching...");
    if (!cliente) {
      return;
    }

    const { cliente: clienteResponse } = await promoteLead(
      leadId,
      cliente,
      formData
    );

    router.push(`/clientes/${clienteResponse.id}/oportunidades/novo`);
  };

  const { data: lead } = useQuery(
    "lead",
    async () => await getLeadById(leadId)
  );

  if (!lead) return null;

  const steps = [
    {
      label: "Dados do cliente",
      content: (
        <>
          <ClienteQueryProvider>
            <ClienteFormBase
              onSubmit={handleNext}
              isError={false}
              isLoading={false}
              isSuccess={false}
              defaultValues={{
                nomeFantasia: lead.nomeFantasia,
              }}
            />
          </ClienteQueryProvider>
        </>
      ),
    },
    {
      label: "Dados do representante",
      content: (
        <RepresentanteFormBase
          onSubmit={onSubmit}
          isError={false}
          isLoading={false}
          isSuccess={false}
          defaultValues={{
            nome: lead.nomeRepresentante,
            telefone: lead.telefoneRepresentante,
            email: lead.emailRepresentante,
          }}
        />
      ),
    },
  ];

  return (
    <Grid container direction={"column"} spacing={4} marginTop={2}>
      <Grid item>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => {
            const { label } = step;
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>

      <Grid item container spacing={2} direction={"column"}>
        <Grid item>{steps[activeStep].content}</Grid>
      </Grid>
    </Grid>
  );
}
