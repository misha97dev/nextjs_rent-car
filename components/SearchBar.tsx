"use client";
import { useState } from "react";
import { ManufacturersList, SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getCars } from "@/utils";

const SearchBtn = ({ styles }: { styles: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${styles}`}>
      <Image
        src="/icons/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (make === "" && model === "") {
      return alert("Your search fields are empty!");
    }
    getSearchParams(make.toLowerCase(), model.toLowerCase());
  };
  const getSearchParams = (make: string, model: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    if (make) {
      urlParams.set("make", make);
    } else {
      urlParams.delete("make");
    }
    if (model) {
      urlParams.set("model", model);
    } else {
      urlParams.delete("model");
    }

    const resultPath = `${window.location.pathname}?${urlParams.toString()}`;
    router.push(resultPath);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={make}
          setManufacturer={(e) => setMake(e)}
        />{" "}
        <SearchBtn styles="sm:hidden " />
      </div>
      <div className="searchbar__item">
        <Image
          src="/images/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car-model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Passat"
          className="searchbar__input"
        />
        <SearchBtn styles="sm:hidden" />
      </div>
      <SearchBtn styles="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
