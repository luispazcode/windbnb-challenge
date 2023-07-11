import { StayItem } from "./StayItem";
import stays from "../data/stays.json";
export const StaysList = () => {
	return (
		<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 py-6'>
			{stays.map((stay, index) => (
				<StayItem key={index} stay={stay} />
			))}
		</div>
	);
};
