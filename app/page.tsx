import Hero from "@/sections/Hero";
import HomeCarousel_1 from "@/sections/HomeCarousel_1";
import HomeCarousel_2 from "@/sections/HomeCarousel_2";
import HomeCarousel_3 from "@/sections/HomeCarousel_3";
export default function Home() {
	return (
		<main className="relative w-11/12 max-sm:w-full mx-auto my-0 max-sm:m-0 bg-white ">
			<section className="bg-white h-screen min-h-[700px] max-sm:min-h-[470px] max-sm:h-[470px]">
				<Hero />
			</section>
			<section className="bg-white w-full section-h">
				<HomeCarousel_1/>
			</section>
			<section className="bg-white w-full section-h mt-16">
				<HomeCarousel_2/>
			</section>
			<section className="bg-white w-full section-h mt-16">
				<HomeCarousel_3/>
			</section>
			
		</main>
	);
}
