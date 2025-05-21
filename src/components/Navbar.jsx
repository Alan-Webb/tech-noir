import logo from "../assets/logo.webp";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/50">
			<div className="container px-4 m-auto relative text-sm">
				<div className="flex justify-center items-center">
					<div className="flex items-center flex-shrink-0">
						<img className="h-10 w-10 mr-2" src={logo} alt="logo" />
						<span className="text-xl tracking-tight">Tech-Noir</span>
					</div>
					<ul className="hidden lg:flex"></ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
