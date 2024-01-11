"use client";

import { Container } from "@mui/material";
import PromoverLeadForm from "@/app/_components/forms/lead/PromoverLeadForm";
import { LeadQueryProvider } from "@/app/_components/queryProviders/LeadQueryProvider";

type PageParams = {
  leadId: string;
  oportunidadeId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { leadId, oportunidadeId } = params;

  return (
    <Container>
      <LeadQueryProvider>
        <PromoverLeadForm leadId={leadId} oportunidadeId={oportunidadeId} />
      </LeadQueryProvider>
    </Container>
  );
}
