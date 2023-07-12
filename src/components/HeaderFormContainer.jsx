import { FaXmark } from "react-icons/fa6";

export const HeaderFormContainer = ({ setIsExpanded }) => {
	return (
		<header className='flex justify-between items-center'>
			<p className='text-xs font-bold'>Edit your search</p>
			<button
				onClick={(e) => {
					e.preventDefault();
					setIsExpanded(false);
				}}
			>
				<FaXmark className='font-bold text-2xl' />
			</button>
		</header>
	);
};
