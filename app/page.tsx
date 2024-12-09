import Slide from "@/sections/HomeSlide";
import Hero from "@/sections/Hero";
import HomeCarousel_1 from "@/sections/HomeCarousel_1";
import HomeCarousel_2 from "@/sections/HomeCarousel_2";
export default function Home() {
	return (
		<main className="relative w-11/12 mx-auto my-0">
			<section className="bg-white h-screen min-h-[700px]">
				<Hero />
			</section>
			<section className="bg-white w-full section-h">
				<HomeCarousel_1/>
			</section>
			<section className="bg-white w-full section-h">
				<HomeCarousel_2/>
			</section>
			<section>
				catgories_3
			</section>
			
		</main>
	);
}
