"use client";

import { Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import { RepresentanteFormBase } from "@/src/components/forms/representante/RepresentanteFormBase";
import * as navigation from "next/navigation";
import { Lead } from "@/src/types/Lead";
import { CreateRepresentante, Representate } from "@/src/types/Representante";
import { CreateOportunidade } from "@/src/types/Oportunidade";
import { promoteLead } from "../actions";
import { OportunidadeFormBase } from "../../oportunidades/components/OportunidadeBaseForm";
import { ErrorNotification } from "@/src/components/notifications/ErrorNotification";

type PromoverLeadFormProps = {
  lead: Lead;
  representantes: Representate[];
};

export default function PromoverLeadForm(props: PromoverLeadFormProps) {
  const { lead, representantes } = props;
  const { id: leadId } = lead;
  const router = navigation.useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [representante, setRepresentante] = useState<CreateRepresentante>();
  const [errors, setErrors] = useState<Error[]>([]);
  const [loading, setLoading] = useState(false);

  const handleNext = (formData: CreateRepresentante) => {
    setRepresentante(formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onSubmit = async (formData: CreateOportunidade) => {
    try {
      setLoading(true);
      formData.valor = Number(formData.valor);
      if (!representante) {
        throw new Error("Erro ao gerar oportunidade");
      }
      const res = await promoteLead(leadId, representante, formData);

      if (res) {
        router.push(`/oportunidades`);
      }
    } catch (error) {
      setErrors([...errors, new Error("Erro ao gerar oportunidade!")]);
    } finally {
      setLoading(false);
    }
  };

  if (!lead) return <Typography variant={"h6"}>Carregando...</Typography>;

  const steps = [
    {
      label: "Dados do representante",
      content: (
        <RepresentanteFormBase
          clienteId={lead.clienteId}
          onSubmit={handleNext}
          isLoading={loading}
          defaultValues={{
            nome: lead.nomeRepresentante,
            telefone: lead.telefoneRepresentante,
            email: lead.emailRepresentante,
          }}
          buttonText={"Próximo"}
        />
      ),
    },
    {
      label: "Dados da oportunidade",
      content: (
        <OportunidadeFormBase
          clienteId={lead.clienteId}
          onSubmit={onSubmit}
          representantes={representantes}
        />
      ),
    },
  ];

  return (
    <>
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

      {Boolean(errors.length) && (
        <ErrorNotification
          message={errors[0].message}
          open={Boolean(errors.length)}
          onClose={() => setErrors([])}
        />
      )}
    </>
  );
}
