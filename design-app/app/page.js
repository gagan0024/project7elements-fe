import Header from "@/component/common/Header";
import HomeDiveDetail from "@/component/page/HomeDiveDetail";
import TryFree from "@/component/common/TryFree";
import HomeBanner from "@/component/page/HomeBanner";
import HomeCoreFeature from "@/component/page/HomeCoreFeature";
import HomePricing from "@/component/page/HomePricing";
import Integration from "@/component/common/Integration";
import Footer from "@/component/common/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeBanner />
      <HomeCoreFeature />
      <TryFree />
      <HomeDiveDetail />
      <HomePricing />
      <Integration />
      <Footer />
    </main>
  );
}
