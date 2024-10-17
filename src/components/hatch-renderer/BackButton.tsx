"use client";

import { FC, ReactNode } from "react";
import Button from "../ui/Button";
import useOpenHatches from "@/hooks/useOpenHatches";
import { useRouter } from "next/navigation";

type Props = {
  calendarId: string;
  children: ReactNode;
};

const BackButton: FC<Props> = ({ calendarId, children }) => {
  const { searchParams } = useOpenHatches();
  const router = useRouter();

  return (
    <Button
      block
      onClick={() => {
        router.push(`/c/${calendarId}?${searchParams.toString()}`, {
          scroll: false
        });
      }}
    >
      {children}
    </Button>
  );
};

export default BackButton;
