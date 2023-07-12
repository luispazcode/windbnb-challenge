import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HeaderFormContainer } from "./HeaderFormContainer";

export const SearchBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const formContainer = useRef(null);

	const handleClick = ({ target }) =>
		formContainer.current && formContainer.current.contains(target)
			? setIsExpanded(true)
			: setIsExpanded(false);

	useEffect(() => {
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return (
		<div
			className={`${
				isExpanded
					? "bg-white fixed top-0 left-0 right-0 h-[70vh] lg:h-[40vh] z-30 p-6 shadow-md"
					: ""
			} transition-all duration-400`}
			ref={formContainer}
		>
			{isExpanded && <HeaderFormContainer setIsExpanded={setIsExpanded} />}

			<div
				className={`flex items-center rounded-2xl border border-[#F2F2F2] mx-8 md:mx-0 shadow-sm ${
					isExpanded ? "mt-6" : ""
				}`}
			>
				<div className='p-2 border-r border-[#F2F2F2] grow text-center'>
					<span className='text-sm'>Helsinki, Finland</span>
				</div>
				<div className='p-2 w-1/3 border-r border-[#F2F2F2]'>
					<input
						type='text'
						placeholder='Add guests'
						className='text-quaternary w-full outline-none text-sm'
					/>
				</div>
				<div className='p-2 grow'>
					<button className='w-full' type='submit'>
						<FaSearch className='text-primary mx-auto' />
					</button>
				</div>
			</div>
		</div>
	);
};
