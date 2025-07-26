import MainLayout from "@/components/mainlayout";
import HeroSection from "@/components/herosection";
import VendorDirectoryComponent from "@/components/vendordirectory";

const meta = {
  title: "Applite",
  description:
    " Applite's enterprise-grade vendor directory makes it easy to search, view, and manage verified vendors — all in one place.",
  rel: "canonical",
  href: "/",
  name: "google-site-verification",
};

export default function Home() {
  return (
    <MainLayout meta={meta}>
      <HeroSection />
      <VendorDirectoryComponent />
    </MainLayout>
  );
}
