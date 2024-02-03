export const calculateAge = () => {
  const birthDate = '2000-06-25';
  const ageDiff: number = Date.now() - new Date(birthDate).getTime();
  const ageDate: Date = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
