import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import NewRent from "@/components/rent/newRent";

export default function Home() {
  return (
    <div>
      <Navbar  />
      <Hero/>
      <NewRent/>
    </div>
  );
}
