"use client";

import { Container } from "@mui/material";
import PromoverLeadForm from "@/app/_components/forms/lead/PromoverLeadForm";
import { LeadQueryProvider } from "@/app/_components/queryProviders/LeadQueryProvider";

type PageParams = {
  leadId: string;
};

export default function Page({ params }: { params: PageParams }) {
  const { leadId } = params;

  return (
    <Container>
      <LeadQueryProvider>
        <PromoverLeadForm leadId={leadId} />
      </LeadQueryProvider>
    </Container>
  );
}
