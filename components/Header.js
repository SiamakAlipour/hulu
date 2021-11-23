import {
	BadgeCheckIcon,
	HomeIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
function Header() {
	return (
		<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image
				src='/hulu-white.webp'
				width={200}
				height={100}
				className='object-contain'
				alt=''
			/>
		</header>
	);
}

export default Header;
