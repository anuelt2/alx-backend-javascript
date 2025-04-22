export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce(
    (accumulator, student) => accumulator + student.id,
    initialValue,
  );
}
