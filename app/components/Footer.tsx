export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize">
				Copyright AirShare &copy; {year}
			</footer>
		</>
	);
};