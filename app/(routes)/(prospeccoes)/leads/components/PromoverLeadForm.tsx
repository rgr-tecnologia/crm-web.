"use client";

import { Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { RepresentanteFormBase } from "@/src/components/forms/representante/RepresentanteFormBase";
import { CreateRepresentante } from "@/src/types/cliente/representante/CreateRepresentante";
import * as navigation from "next/navigation";
import { LeadOportunidadeFormBase } from "@/src/components/forms/lead/oportunidade/LeadOportunidadeBaseForm";
import { LeadOportunidadeCreate } from "@/src/types/prospeccao/oportunidade/OportunidadeCreate";

type PromoverLeadFormProps = {
  leadId: string;
};

export default function PromoverLeadForm(props: PromoverLeadFormProps) {
  const { leadId } = props;

  const [activeStep, setActiveStep] = useState(0);

  const [representante, setRepresentante] = useState<CreateRepresentante>();

  const router = navigation.useRouter();

  const handleNext = (formData: CreateRepresentante) => {
    setRepresentante(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmit = async (formData: LeadOportunidadeCreate) => {
    try {
      formData.valor = Number(formData.valor);
      if (!representante) {
        throw new Error("Erro ao gerar oportunidade");
      }

      const res = await promoteLead(leadId, representante, formData);

      if (!res.ok) {
        throw new Error("Erro ao promover lead");
      }
      router.push(`/clientes`);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro ao promover lead");
      }
    }
  };

  if (!lead) return <Typography variant={"h6"}>Carregando...</Typography>;

  const steps = [
    {
      label: "Dados do representante",
      content: (
        <RepresentanteFormBase
          onSubmit={handleNext}
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
    {
      label: "Dados da oportunidade",
      content: <LeadOportunidadeFormBase onSubmit={onSubmit} />,
    },
  ];

  return (
    <Grid container direction={"column"} spacing={4} marginTop={1}>
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
