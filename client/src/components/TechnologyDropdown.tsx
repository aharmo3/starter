import React, { FC } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import data from "../languages.json";

type TechnologyDropdownProps = {
  value: string;
  onSelect: (newValue: string | null) => void;
}
const TechnologyDropdown: FC<TechnologyDropdownProps> = (props) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={props.value}
        options={data.map((option: string) => option)}
        onChange={(event, newValue) => {
          props.onSelect(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Primary Technology" />
        )}
      />
    </Stack>
  );
};
export default TechnologyDropdown;
