async function getData(url) {
  let data = await fetch(url);
  let result = await data.json();
  return result;
}

export default getData;
