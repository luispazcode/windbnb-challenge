import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
	return (
		<div className='flex items-center rounded-2xl border border-[#F2F2F2] mx-8 md:mx-0 shadow-sm'>
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
				<button className='w-full'>
					<FaSearch className='text-primary mx-auto' />
				</button>
			</div>
		</div>
	);
};
