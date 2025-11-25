"use server";

import { Resend } from "resend";

import Email from "@/emails/ad";

import * as z from "zod";

const schema = z.object({
  email: z.email()
});

export async function sendMail(_: string, data: FormData): Promise<string> {
  const { promise, resolve } = Promise.withResolvers<string>();

  const obj = {
    email: data.get("email")
  };

  try {
    const validated = schema.parse(obj);

    const resend = new Resend(process.env.RESEND_APIKEY);

    resend.emails
      .send(
        {
          from: "Joulupukki <joulupukki@koodijoulukalenteri.pekkis.eu>",
          to: validated.email,
          subject: "Haluaisitko kuulla koodijoulukalenterista?",
          react: <Email />
        },
        {
          idempotencyKey: `spam-${validated.email}`
        }
      )
      .then(() => {
        resolve("sent");
      });

    return promise;
  } catch {
    return "fail";
  }
}
