import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import separator from "../assets/separator.svg";

const inter = Inter({ subsets: ["latin"] });

export default function rentCar() {
  const [cars, setCars] = useState(true);
  const [vans, setVans] = useState(false);
  const [prestige, setPrestige] = useState(false);

  const handleCarsChange = () => {
    setCars(true);
    setVans(false);
    setPrestige(false);
  };

  const handleVansChange = () => {
    setCars(false);
    setVans(true);
    setPrestige(false);
  };

  const handlePretigeChange = () => {
    setCars(false);
    setVans(false);
    setPrestige(true);
  };

  useEffect(() => {
    setCars(true);
    setVans(false);
    setPrestige(false);
  }, []);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={
            cars
              ? "my-10 text-[#F3971F] text-[14px]  ml-10 mr-10 text-center border-b-[1px] border-b-[#F3971F]"
              : "my-10 text-[white] text-[14px]  ml-10 mr-10 text-center"
          }
          onClick={handleCarsChange}
        >
          CARS
        </button>
        <button
          type="button"
          className={
            vans
              ? "my-10 text-[#F3971F] text-[14px]  ml-10 mr-10 text-center border-b-[1px] border-b-[#F3971F]"
              : "my-10 text-[white] text-[14px]  ml-10 mr-10 text-center"
          }
          onClick={handleVansChange}
        >
          VANS & TRACKS
        </button>
        <button
          type="button"
          className={
            prestige
              ? "my-10 text-[#F3971F] text-[14px]  ml-10 mr-10 text-center border-b-[1px] border-b-[#F3971F]"
              : "my-10 text-[white] text-[14px]  ml-10 mr-10 text-center"
          }
          onClick={handlePretigeChange}
        >
          PRESTIGE
        </button>
      </div>
      <div className="my-10 text-white text-[16px]  ml-10 mr-10 text-center">
        Pick up & Return
      </div>
      <div className="flex items-center justify-center">
        <select
          name="hours"
          className="  border border-[#F3971F] text-[#F3971F] font-normal py-2 px-4 mx-8 mt-2 rounded-full w-[272px] text-[13px]"
        >
          <option value="city, airport">city, airport</option>
          <option value="Las Palmas Gran Canaria Airport">
            Las Palmas Gran Canaria Airport
          </option>
          <option value="London">London</option>
          <option value="Lyon">Lyon</option>
          <option value="Lille">Lille</option>
          <option value="Madrid">Madrid</option>
          <option value="Granada">Granada</option>
          <option value="Valencia">Valencia</option>
          <option value="Nantes">Nantes</option>
          <option value="Barcelona">Barcelona</option>
        </select>
      </div>
      <div className="flex items-center mt-[42px] mb-[42px] justify-center">
        <div className="mr-[30px]">
          <p className="text-[#F3971F] text-[14px]">PICK UP</p>
          <p className="text-[white] text-[64px]">day</p>
          <p className="text-[white] text-[14px]">month</p>
          <p className="text-[#F3971F] text-[14px]">hour</p>
        </div>
        <div>
          <Image src={separator} />
        </div>
        <div className="ml-[30px]">
          <p className="text-[#F3971F] text-[14px]">DROP-OFF</p>
          <p className="text-[white] text-[64px]">day</p>
          <p className="text-[white] text-[14px]">month</p>
          <p className="text-[#F3971F] text-[14px]">hour</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <select
          name="hours"
          className="  border border-[#F3971F] text-[#F3971F] font-normal py-2 px-4 mx-8 mt-2 mb-[42px] rounded-full w-[272px] text-[13px]"
        >
          <option value="Country of residence">Country of residence</option>
          <option value="France">France</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Spain">Spain</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Belgiumd">Belgium</option>
          <option value="Germany">Germany</option>
          <option value="Portugal">Portugal</option>
          <option value="Italy">Italy</option>
          <option value="Croatia">Croatia</option>
        </select>
      </div>
      <div className="flex w-full mt-4">
        <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 mx-8 rounded-full w-full">
          Search
        </button>
      </div>
    </div>
  );
}
