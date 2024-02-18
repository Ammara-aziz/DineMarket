import Hero from "@/views/Hero";
import Promotion from "@/views/Promotion";
import WeHave from "@/components/layout/WeHave";
import Newsltr from "@/views/Newsltr";


export default function Home() {
  return (
    <main >
      <Hero />
      <Promotion />
      <WeHave />
      <Newsltr/>
    </main>
  )
}

