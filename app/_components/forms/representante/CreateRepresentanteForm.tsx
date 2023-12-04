"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { RepresentanteFormBase } from "./RepresentanteFormBase";
import { Representate } from "@/app/_types/representante/Representante";
import { createRepresentante } from "@/app/_lib/representante/createRepresentante";

type CreateRepresentanteFormProps = {
  clienteId: string;
};

// const createRepresentanteEndereco = async (
//   clienteId: string,
//   data: RepresentateEndereco
// ) => {
//   const res = await fetch(`${BFF_URL}/clientes/${clienteId}/representantes`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: {
//       revalidate: 0,
//     },
//   });

//   const json: Representate = await res.json();

//   return json;
// };

export const CreateRepresentanteForm = (
  props: CreateRepresentanteFormProps
) => {
  const { clienteId } = props;
  const router = useRouter();

  // const mockDefaultValues = {
  //   status: "ATIVO",
  //   nome: "fasdfasdf",
  //   departamento: "asdfasdf",
  //   cargo: "asdfasdf",
  //   dataNascimento: new Date(),
  //   telefone: "51235123",
  //   email: "fasdfsadf@fasdfsadf",
  //   endereco: {
  //     cep: "23452345",
  //     logradouro: "asdfasdf",
  //     numero: "213412",
  //     complemento: "asdfasdf",
  //     bairro: "asdfadf",
  //     cidade: "asdfasdf",
  //     estado: "asdfasdf",
  //   },
  // }

  const onSubmit = async (data: Representate) => {
    const { id, endereco, ...representante } = data;
    try {
      await createRepresentante(clienteId, {
        ...representante,
        clienteId,
      });
      //await createRepresentanteEndereco(clienteId, endereco);

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
                <RepresentanteFormBase onSubmit={onSubmit} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
