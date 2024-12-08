import Slide from "@/sections/HomeSlide";
import Hero from "@/sections/Hero";
import HomeCarousel_1 from "@/sections/HomeCarousel_1";
export default function Home() {
	return (
		<main className="relative w-11/12 mx-auto my-0">
			<section className="bg-white h-screen min-h-[700px]">
				<Hero />
			</section>
			<section className="bg-white w-full h-[700px]">
				<HomeCarousel_1/>
			</section>
			<section>
				catgories_2
			</section>
			<section>
				catgories_3
			</section>
			
		</main>
	);
}
