// accept san object and returns an array of all the values in the object that have a typeof string

const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
function collectStrings(obj1) {
  var arr = [];

  function findStrings(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "string") {
        arr.push(obj[key]);
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        return findStrings(obj[key]);
      }
    }
  }
  findStrings(obj1);
  return arr;
}

console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])
