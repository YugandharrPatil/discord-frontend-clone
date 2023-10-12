export default function NavLink({ navText }: { navText: string }) {
	return (
		<a className="text-white font-semibold mx-3 hover:text-blue-700" href="#">
			{navText}
		</a>
	);
}
