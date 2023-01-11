// import * as yup from 'yup';

// export function createYupSchema(schema, config) {
//   const { id, validationType, validations = [] } = config;
//   if (!yup[validationType]) {
//     return schema;
//   }
//   let validator = yup[validationType]();
//   validations.forEach(validation => {
//     const { params, type } = validation;
//     if (!validator[type]) {
//       return;
//     }
//     //console.log(type, params);
//     validator = validator[type](...params);
//   });
//   schema[id] = validator;
//   return schema;
// }

import * as yup from 'yup';

export function createYupSchema(schema, config) {
  const { id, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    if (type === 'when') {
      const { is, then, otherwise } = params[1];
      let whenParams = {};
      whenParams.is = is;
      whenParams.then = (schema) => schema[then[0].type](...then[0].params);

      if (otherwise) {
        whenParams.otherwise = (schema) =>
          schema[otherwise[0].type](...otherwise[0].params);
      }

      validator = validator['when'](params[0], whenParams);
    } else {
      validator = validator[type](...params);
    }
  });
  schema[id] = validator;
  return schema;
}
