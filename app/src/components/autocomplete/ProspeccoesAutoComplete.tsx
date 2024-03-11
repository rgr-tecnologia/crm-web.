"use client";

import { Prospeccao } from "@/src/types/prospeccao/Prospeccao";
import { Autocomplete, TextField } from "@mui/material";

type ProspeccoesAutoCompleteProps = {
  prospeccoes: Prospeccao[];
  onChange: (prospeccao: Prospeccao) => void;
  onClear: () => void;
};

export function ProspeccoesAutoComplete(props: ProspeccoesAutoCompleteProps) {
  const { prospeccoes, onChange, onClear } = props;

  return (
    <Autocomplete
      options={prospeccoes.map((prospeccao) => {
        return {
          label: prospeccao.nomeFantasia,
        };
      })}
      renderInput={(params) => (
        <TextField {...params} label="Prospecções" variant="outlined" />
      )}
      onChange={(event, value) => {
        if (value) {
          const prospeccao = prospeccoes.find(
            (prospeccao) => prospeccao.nomeFantasia === value.label
          );
          if (prospeccao) {
            onChange(prospeccao);
          }
        } else {
          onClear();
        }
      }}
    />
  );
}
