import { useEffect, useState } from 'react';
import useConfig from './useConfig';

const useForm = (urlName) => {
  const [stepsData, setStepsData] = useState(null); // all the wizard steps
  const [headings, setHeadings] = useState(null);
  const [formTitle, setFormTitle] = useState(null);
  const [formTeam, setFormTeam] = useState(null);
  const { formsIndex, formFetch } = useConfig();

  const getFormTeam = (urlname) =>
    formsIndex().then((formData) => {
      return formData.find((item) =>
        item.forms.some((form) => form.urlName === urlname)
      ).team;
    });
  // get the form's filename from the passed url name
  // todo:  fix the dual action of setting title by having it return the form element
  //        and then extracting title and filename individually
  //        rename to getFormByUrl
  const getFilename = (urlName) =>
    formsIndex()
      .then((formData) => {
        return formData
          .find((product) =>
            product.forms.find((item) => item.urlName === urlName)
          )
          .forms.find((item) => item.urlName === urlName);
      })
      .then((form) => {
        setFormTitle(form.name);

        return form.file;
      })
      .catch((error) => {
        console.log('error:', error);
      });

  useEffect(() => {
    getFormTeam(urlName).then((teamname) => {
      setFormTeam(teamname);
      console.log(teamname);
    });

    getFilename(urlName).then((filename) => {
      formFetch(filename).then((formData) => {
        setStepsData(formData);
        let headings = [];
        formData.map((step) => {
          headings.push(step.heading);
        });
        setHeadings(headings);
      });
    });
  }, []);

  return { stepsData, headings, formTitle, formTeam };
};

export default useForm;
