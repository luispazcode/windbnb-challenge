import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StaysContainer } from "./components/StaysContainer";

export const App = () => {
	return (
		<main className='container mx-auto px-4 py-6 text-secondary font-montserrat'>
			<Header />
			<StaysContainer />
			<Footer />
		</main>
	);
};
