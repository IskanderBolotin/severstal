export const getOrdersData = async () => {
  const response = await fetch("/src/assets/data.json");
  let data = await response.json();
  return data;
}