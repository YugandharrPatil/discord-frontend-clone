import { Download } from "lucide-react"

export default function Lower() {
  return (
    <>
    <section className="bg-gray-100 pb-24">
      <div className="text-center container mx-auto pt-32">
        <h1 className="uppercase text-5xl font-bold">Reliable tech for staying close</h1>
        <p className="mt-8 w-7/12 mx-auto">Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        <img src="../../assets/just_chiling_landing.svg" className="w-3/4 mx-auto" alt="just-chilling" />
      </div>
      <div className="mt-8 text-center">
        <img src="../../assets/tiny_stars_landing.svg" alt="" className="w-1/5 mx-auto" />
        <h1 className="text-4xl font-bold">Ready to start your journey?</h1><button className="mt-10 bg-[#6e84ff] text-white rounded-full py-4 px-12 z-10 text-xl"><Download className="mr-1 mb-1 h-6 w-6 inline"/> Download for Mac</button>
      </div>
    </section>
    </>
  )
}
