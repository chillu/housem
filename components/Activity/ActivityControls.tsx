import { useState } from "react";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

type Props = {
  onChangeGrouped: (value: boolean) => void;
};

/**
 * Making this a controlled input because it'll eventually be set through router state.
 */
export default function ActivityControls({ onChangeGrouped }: Props) {
  const [isGrouped, setIsGrouped] = useState(false);

  // Feels a bit overkill, but this decouled the options from the component (might not stay a switch)
  const handleListTypeChange = (isChecked) => {
    setIsGrouped(isChecked);
    onChangeGrouped(isChecked);
  };
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="list-type">Group by area?</FormLabel>
      <Switch
        id="list-type"
        onChange={(e) => handleListTypeChange(Boolean(e.target.checked))}
        checked={isGrouped}
      />
    </FormControl>
  );
}
