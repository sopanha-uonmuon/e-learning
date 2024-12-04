import Slide from "@/sections/slide";
import Navbar from "../components/Navbar";
import Hero from "@/sections/Hero";
export default function Home() {
  return (
    <main className="relative w-11/12 mx-auto my-0">
      <section className="bg-white h-[700px]">
        {/* <Slide/> */}
        <Hero />
      </section>
      <section>
        catgories_1
      </section>
      <section>
        catgories_2
      </section>
      <section>
        catgories_3
      </section>
      <section className="absolute top-0 left-0 w-full h-[100px]">
      <Navbar/>
      </section>
    </main>
  );
}
