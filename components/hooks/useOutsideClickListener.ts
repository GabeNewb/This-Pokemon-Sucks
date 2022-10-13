import { RefObject, useEffect } from 'react';

export const useOutsideClickListener = <T extends HTMLElement = HTMLElement>(
	setPathAway: (pathAway: boolean) => void,
	ref: RefObject<T>
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
