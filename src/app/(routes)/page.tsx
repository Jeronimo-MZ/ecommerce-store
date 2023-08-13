import { getBillboards } from "@/actions/get-billboards";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export default async function HomePage() {
  const billboards = await getBillboards();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards[0]} />
      </div>
    </Container>
  );
}
