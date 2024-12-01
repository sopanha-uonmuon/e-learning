import Slide from "@/sections/slide";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main>
      <section>
      <Navbar/>
      </section>
      <section className="w-full min-h-screen">
        <Slide/>
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
    </main>
  );
}
