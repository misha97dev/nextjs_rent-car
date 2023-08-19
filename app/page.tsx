import {
  Banner,
  CarCard,
  CustomFilter,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { SearchProps } from "@/types";
import { getCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: any) {
  const allCars = await getCars({
    make: searchParams.make || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 15,
    model: searchParams.model || "",
  });
  // const isCars = Array.isArray(allCars) || allCars.length > 0 || allCars;
  const isCars = allCars.length > 0;
  return (
    <main className="overflow-hidden">
      <Banner />
      <div className="mt-12 padding-x padding-y max-width" id="cars">
        <div className="cars__text-container">
          <h1 className="text-4x1 font-extrabold">Car catalogue</h1>
          <p>Choose the car of your dream</p>
        </div>
        <div className="cars__filters">
          <SearchBar />
          <div className="cars__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {isCars ? (
          <section>
            <div className="cars__cars-wrapper">
              {allCars?.map((car: any) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <ShowMore
              currentPage={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="cars__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
