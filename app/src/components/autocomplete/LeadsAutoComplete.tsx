import { Lead } from "@/app/_types/lead/Lead";
import { Autocomplete, TextField } from "@mui/material";

type LeadsAutoCompleteProps = {
  leads: Lead[];
  onChange: (lead: Lead) => void;
  onClear: () => void;
};

export function LeadsAutoComplete(props: LeadsAutoCompleteProps) {
  const { leads, onChange, onClear } = props;

  return (
    <Autocomplete
      options={leads.map((lead) => {
        return {
          label: lead.nomeFantasia,
        };
      })}
      renderInput={(params) => (
        <TextField {...params} label="Leads" variant="outlined" />
      )}
      onChange={(event, value) => {
        if (value) {
          const lead = leads.find((lead) => lead.nomeFantasia === value.label);
          if (lead) {
            onChange(lead);
          }
        } else {
          onClear();
        }
      }}
    />
  );
}
