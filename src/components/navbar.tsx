import NavLink from "./nav-link";

export default function Navbar() {
	return (
		<nav className="w-full h-[7vh] bg-discordBlue items-center">
			<div className="container justify-between mx-auto flex items-center h-full">
				<a href="#">
					<img src="../../assets/discord_main_logo.svg" alt="" />
				</a>
				<ul>
					<NavLink navText="Download" />
					<NavLink navText="Nitro" />
					<NavLink navText="Safety" />
					<NavLink navText="Support" />
					<NavLink navText="Blog" />
					<NavLink navText="Careers" />
				</ul>
				<button className="px-4 py-2 bg-white rounded-full">Login</button>
			</div>
		</nav>
	);
}
