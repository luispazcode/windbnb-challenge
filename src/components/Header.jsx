import { SearchBar } from "./SearchBar";

export const Header = () => {
	return (
		<header className='flex flex-col gap-8 md:gap-0 md:items-center md:flex-row md:justify-between'>
			<img src='logo.svg' alt='logo' className='max-w-[6rem]' />
			<SearchBar />
		</header>
	);
};
