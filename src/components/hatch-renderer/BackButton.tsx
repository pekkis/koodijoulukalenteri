"use client";

import { FC, ReactNode } from "react";
import Button from "../ui/Button";
import useOpenHatches from "@/hooks/useOpenHatches";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

const BackButton: FC<Props> = ({ children }) => {
  const { searchParams } = useOpenHatches();
  const router = useRouter();

  return (
    <Button
      block
      onClick={() => {
        router.push(`/?${searchParams.toString()}`, { scroll: false });
      }}
    >
      {children}
    </Button>
  );
};

export default BackButton;
