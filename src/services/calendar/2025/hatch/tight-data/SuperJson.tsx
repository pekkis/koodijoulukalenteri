import { Heading } from "@/components/ui/Heading";
import { Margins } from "@/components/ui/Margins";
import { Stack } from "@/components/ui/Stack";
import { FC } from "react";
import superjson from "superjson";

export const SuperJson: FC = () => {
  return (
    <Margins block="s">
      <Heading level={2}>SUPER JSON!</Heading>

      <Stack>
        <div>
          <code>`{`{ date: new Date(), set: new Set([1, 2, 3]) }`}`</code>
        </div>

        <div>
          <code>
            {superjson.stringify({ date: new Date(), set: new Set([1, 2, 3]) })}
          </code>
        </div>
      </Stack>
    </Margins>
  );
};
