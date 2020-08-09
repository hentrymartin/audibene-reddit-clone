export const debounce = (callback, wait, immediate) => {
	let timeout;
	return function() {
    const self = this;
    const args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) callback.apply(self, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) callback.apply(self, args);
	};
};