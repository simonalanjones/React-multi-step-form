const useConfig = () => {
  async function fetchData() {
    const response = await fetch('./../src/configs/index.json');
    const forms = await response.json();
    console.log(forms);
    //return await response.json();
    return forms;
  }

  async function fetchForm(filename) {
    const response = await fetch(`../src/configs/${filename}.json`);
    return await response.json();
  }

  const formsIndex = () => {
    return fetchData();
  };

  const formFetch = (filename) => {
    return fetchForm(filename);
  };

  return { formsIndex, formFetch };
};

export default useConfig;
