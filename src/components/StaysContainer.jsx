import { StaysList } from "./StaysList";

export const StaysContainer = () => {
	return (
		<section className='py-10'>
			<header className='flex justify-between items-center'>
				<h1 className='text-lg font-bold'>Stays in Finland</h1>
				<span className='text-sm font-medium'>12+ stays</span>
			</header>
			<StaysList />
		</section>
	);
};
