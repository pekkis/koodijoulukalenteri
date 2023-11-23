"use client";

import useOpenHatches from "@/hooks/useOpenHatches";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BackLink: FC<Props> = ({ children }) => {
  const { searchParams } = useOpenHatches();
  const url = `/?${searchParams.toString()}`;

  return <Link href={url}>{children}</Link>;
};

export default BackLink;
