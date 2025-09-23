import RecentBlog from "@/components/blog/recentBlog";
import CTA from "@/components/cta";
import Hero from "@/components/hero/hero";
import PageTransition from "@/components/PageTransition";
import NewRent from "@/components/rent/newRent";
import OfficeRent from "@/components/rent/officeRent";

export default function Home() {
  return (
        <PageTransition>
    <div>
      <Hero />
      <div>
        <h1 className="text-2xl font-bold text-center mt-7 mb-3">
          House Lagbe - The Best Platform for Renting Houses
        </h1>
        <p className="text-center text-gray-600">
          Explore all types of rental homes and find your perfect stay
        </p>
      </div>
      <NewRent />
      <OfficeRent />
      <RecentBlog />
      <CTA />
    </div>
        </PageTransition>
  );
}
