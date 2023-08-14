import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { Container } from "./container";

type ErrorPageProps = {
  message: string;
};
export const ErrorPage = ({ message }: ErrorPageProps) => {
  return (
    <Container className="py-10 space-y-2 flex-1 px-4">
      <h2 className="font-bold text-6xl">An Error ocurred</h2>
      <p className="text-xl">{message}</p>
      <Link href="/" className="flex items-center gap-x-1 underline text-lg max-w-fit">
        <ArrowLeftIcon size={16} />
        Back to Home
      </Link>
    </Container>
  );
};
