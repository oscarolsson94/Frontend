// A decorator adds new functionality

// (often methods) to an object

// or to a whole class of objects


// This decorator add a toString method

// to all classes you send to it


export default (classDef) => {


  // In JS we can add extra methods to a class

  // - alter the class definition

  // by adding methods to the prototype:


  Object.assign(classDef.prototype, {


    toString() {

      return JSON.stringify(this, null, '  ');

    }


  });


  return classDef;


};