import '@styles/globals.scss';
import '@styles/_antOverrides.scss';

import type { AppProps } from 'next/app';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='app-container'>
			<Image
				alt='decorative map of Kanto'
				className='background'
				layout='fill'
				objectFit='cover'
				quality={100}
				src='/images/wallpaper.jpg' />
			<div className='page-container'>
				<Component { ...pageProps } />
			</div>
		</div>
	);
}

export default MyApp;
