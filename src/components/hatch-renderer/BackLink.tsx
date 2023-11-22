"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BackLink: FC<Props> = ({ children }) => {
  const sp = useSearchParams();
  const url = `/?${sp.toString()}`;

  return <Link href={url}>{children}</Link>;
};

export default BackLink;
