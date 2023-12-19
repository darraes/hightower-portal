export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<>
			<footer className="text-center text-capitalize mt-5 mb-4">
				Copyright AirShare &copy; {year}
			</footer>
		</>
	);
};