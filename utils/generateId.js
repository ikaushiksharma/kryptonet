const generateId = (length) => {
  let result = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charLen = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLen));
  }
  return result;
};
export default generateId;
