export default function createIteratorObject(report) {
  const { allEmployees } = report;

  const employees = [
    ...Object.values(allEmployees).flat(),
  ];

  return {
    [Symbol.iterator]() {
      let idx = 0;

      return {
        next() {
          if (idx < employees.length) {
            const value = employees[idx];
            idx += 1;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
