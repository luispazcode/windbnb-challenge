import { FaStar } from "react-icons/fa";

export const StayItem = ({ stay }) => {
	const { photo, superHost, type, beds, title, rating } = stay;

	return (
		<div className='flex flex-col gap-3'>
			<img
				src={photo}
				alt='photo-stay'
				className='rounded-3xl max-h-[14rem] w-full object-cover'
			/>
			<div className='flex justify-between items-center text-tertiary'>
				{superHost && (
					<span className='text-[.625rem] uppercase font-bold border border-tertiary py-1 px-2 rounded-xl'>
						Super Host
					</span>
				)}
				<span className='text-xs font-medium text-[#828282]'>
					{type} . {beds} beds
				</span>
				<span className='flex gap-2 items-center'>
					<FaStar className='text-primary' />
					{rating}
				</span>
			</div>
			<h2 className='font-semibold text-sm'>{title}</h2>
		</div>
	);
};
