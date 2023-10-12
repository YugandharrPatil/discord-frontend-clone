import { INFOSEC_CONTENT } from "../src/snippets/infosec";
import Footer from "./components/footer";
import Header from "./components/header";
import InfoSection from "./components/info-section";
import Lower from "./components/lower";
import Navbar from "./components/navbar";

export default function App() {
	return (
		<>
			<Navbar />
			<Header />
			<InfoSection imagePath="../assets/invite_only_landing.svg" altText="invite-only" heading={INFOSEC_CONTENT[0].heading} paragraph={INFOSEC_CONTENT[0].paragraph} orderImage="first" orderText="last"/>
			<InfoSection imagePath="../assets/hanging_out_easy_landing.svg" altText="hangout-out" heading={INFOSEC_CONTENT[1].heading} paragraph={INFOSEC_CONTENT[1].paragraph} orderImage="last" orderText="first" bgColor="bg-gray-100"/>
			<InfoSection imagePath="../assets/fandom_landing.svg" altText="fandom" heading={INFOSEC_CONTENT[2].heading} paragraph={INFOSEC_CONTENT[2].paragraph} orderImage="last" orderText="first"/>
			<Lower />
			<Footer />
		</>
	);
}
