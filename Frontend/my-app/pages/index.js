import HeroBanner from "@/components/HeroBanner";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <main className="h-[500px]">
      <HeroBanner />
    </main>
  );
}
