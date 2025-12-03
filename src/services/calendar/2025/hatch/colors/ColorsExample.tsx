import Button from "@/components/ui/Button";
import { Margins } from "@/components/ui/Margins";
import { Stack } from "@/components/ui/Stack";
import { FC } from "react";

export const ColorsExample: FC = () => {
  return (
    <Margins block="s">
      <Stack>
        <Stack row>
          <Button>Punaisin RGB nappi</Button>
          <Button extraRed>Superpunainen nappi</Button>
          <Button relativelyGreener>kellastuva nappi</Button>
        </Stack>
        <Stack row>
          <Button mixWithUgliest block>
            Punaisella blendattu rumin väri
          </Button>
        </Stack>
      </Stack>
    </Margins>
  );
};
