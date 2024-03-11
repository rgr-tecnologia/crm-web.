"use client";

import { Cliente } from "@/src/types/cliente/Cliente";
import { Autocomplete, TextField } from "@mui/material";

type ClienteAutoCompleteProps = {
  clientes: Cliente[];
  onChange: (cliente: Cliente) => void;
  onClear: () => void;
};

export function ClienteAutoComplete(props: ClienteAutoCompleteProps) {
  const { clientes, onChange, onClear } = props;

  return (
    <Autocomplete
      options={clientes.map((cliente) => {
        return {
          label: cliente.nomeFantasia,
        };
      })}
      renderInput={(params) => (
        <TextField {...params} label="Clientes" variant="outlined" />
      )}
      onChange={(event, value) => {
        if (value) {
          const cliente = clientes.find(
            (cliente) => cliente.nomeFantasia === value.label
          );
          if (cliente) {
            onChange(cliente);
          }
        } else {
          onClear();
        }
      }}
    />
  );
}
