import { RefObject, useEffect } from 'react';

export const useOutsideClickListener = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	setPathAway: (pathAway: boolean) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const refElement = ref?.current;

			if (!refElement || refElement.contains((event?.target as Node) || null)) {
				return;
			}

			setPathAway(true);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ ref, setPathAway ]);
};
