function mergeObject<T, U>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const mergedObj = mergeObject({ a: 20 }, { b: 'yolo' });
