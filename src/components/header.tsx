import { Download } from "lucide-react";

export default function Header() {
	return (
		<>
			<div className="bg-header-background bg-[#6e84ff] bg-no-repeat w-full h-[93vh] bg-cover bg-right-top">
          <h1 className="text-[5rem] text-center text-white font-bold pt-[5vh]">IMAGINE A PLACE...</h1>
          <p className="leading-loose text-white text-center mt-[5.83vh] text-xl">...where you can belong to a school club, a gaming group, or a worldwide art community. <br /> Where just you and a handful of friends can spend time together. A place that makes it <br />easy to talk every day and hang out more often.</p>
          <div className="flex gap-4 justify-center mt-[5.83vh] h-16">
            <button className="bg-white rounded-full w-1/3 z-10 text-xl"><Download className="mr-2 h-6 w-6 inline"/> Download for Mac</button>
            <button className="bg-black text-white rounded-full w-1/3 z-10 text-xl">Open Discord on your Browser</button>
          </div>
          <div className="flex w-full h-[40vh] absolute bottom-0">
            <div className="bg-header-left-background bg-no-repeat bg-contain w-1/2 relative right-36"></div>
            <div className="bg-header-right-background bg-no-repeat bg-cover w-1/3 bg-left-top absolute h-[50vh] bottom-0 right-0"></div>
          </div>
        </div>
		</>
	);
}
