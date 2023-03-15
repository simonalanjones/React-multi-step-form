const useConfig = () => {
  const configPath = import.meta.env.DEV
    ? import.meta.env.VITE_CONFIG_PATH
    : '/configs/';

  console.log('path:', configPath);

  async function fetchData() {
    const response = await fetch(`${configPath}index.json`);
    const forms = await response.json();
    console.log(forms);
    //return await response.json();
    return forms;
  }

  async function fetchForm(filename) {
    console.log('fetching:', filename);
    console.log(`${configPath}${filename}.json`);
    const response = await fetch(`${configPath}${filename}.json`);
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
