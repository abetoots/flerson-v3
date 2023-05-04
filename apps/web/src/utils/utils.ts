export const createQueryString = (
  name: string,
  value: string | string[],
  searchParams?: URLSearchParams
) => {
  const params = new URLSearchParams(searchParams);
  if (Array.isArray(value)) {
    if (value.length > 0) {
      for (const v of value) {
        params.append(name, v);
      }
    }
  } else {
    params.set(name, value);
  }

  return params.toString();
};

export function getRandomItems<T>(array: T[], numItems?: number): T[] {
  if (numItems === undefined) {
    numItems = Math.floor(Math.random() * array.length);
  }
  if (numItems >= array.length) {
    return array;
  }

  const result: T[] = [];

  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex] as T;

    if (!result.includes(randomItem)) {
      result.push(randomItem);
    }
  }

  return result;
}
