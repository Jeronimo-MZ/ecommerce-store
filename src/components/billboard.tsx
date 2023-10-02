import type { Billboard as BillboardType } from "@/types";

type BillboardProps = {
  data: BillboardType;
};

export const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover rounded-xl"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden rounded-xl">
          <p className="font-bold text-3xl sm:text-5xl lg:text-7xl sm:max-w-md lg:max-w-xl text-center text-white">
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
};
