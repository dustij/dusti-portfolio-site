import { Container } from "~/components/Container";
import { LoadingSpinner } from "~/components/LoadingSpinner";

export default function Loading() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <LoadingSpinner />
      </div>
    </Container>
  );
}
