"use client";

import Spinner from "@/components/Spinner";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Margins } from "@/components/ui/Margins";
import { Paragraph } from "@/components/ui/Paragraph";
import { Stack } from "@/components/ui/Stack";
import { TextField } from "@/components/ui/TextField";
import { sendMail } from "@/services/calendar/2025/hatch/email/actions";
import { FC, useActionState } from "react";

export const Email: FC = () => {
  const [state, send, pending] = useActionState(sendMail, "waiting");

  return (
    <Margins block="s">
      <Heading level={2}>Lähetä mainossähköposti</Heading>

      <form action={send}>
        <Stack row>
          <TextField
            name="email"
            type="text"
            defaultValue={""}
            placeholder="uhrin sähköposti"
          />
          <Button svelte disabled={pending} type="submit">
            Lähetä {pending && <Spinner />}
          </Button>
        </Stack>

        {state === "sent" && <Paragraph>Sinne meni! ❤️</Paragraph>}

        {state === "fail" && <Paragraph>Pieleen meni! 😞</Paragraph>}
      </form>
    </Margins>
  );
};
