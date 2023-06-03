function mergeArray<T, U>(arr1: T[], arr2: U[]) {
	return [...arr1, ...arr2];
}

const mergedArr = mergeArray([1, 2, 3], ['a', 'b', 'c']);
