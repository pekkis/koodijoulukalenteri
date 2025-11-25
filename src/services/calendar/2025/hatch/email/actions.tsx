"use server";

import { FC } from "react";
import { Resend } from "resend";
import { Html, Button, Tailwind, Img } from "@react-email/components";

import image from "./email.webp";

const Email: FC = () => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Button href="https://example.com" style={{ color: "#61dafb" }}>
          Click me
        </Button>

        <Img
          alt="Koodijoulukalenteri"
          className="rounded-[12px] my-0 mx-auto"
          width={250}
          height={250}
          src={image.src}
        />
      </Tailwind>
    </Html>
  );
};

export async function sendMail(
  status: string,
  data: FormData
): Promise<string> {
  const { promise, resolve } = Promise.withResolvers<string>();

  const resend = new Resend(process.env.RESEND_APIKEY);

  resend.emails
    .send({
      from: "Joulupukki <joulupukki@koodijoulukalenteri.pekkis.eu>",
      to: "pekkisx@gmail.com",
      subject: "Haluaisitko kuulla koodijoulukalenterista",
      react: <Email />
    })
    .then(() => {
      resolve("sent");
    });

  return promise;
}
