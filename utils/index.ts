import { CarProps, SearchProps } from "@/types";

export async function getCars(searchParams: SearchProps) {
  const { make, model, year, limit, fuel } = searchParams;
  const headers = {
    "X-RapidAPI-Key": process.env.rapidapi_key,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?&model=${model}&make=${make}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();
  return result;
}

export const calculateCarPrice = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const generateCarImg = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(type, value);
  const resultPath = `${window.location.pathname}?${urlParams.toString()}`;
  return resultPath;
};
