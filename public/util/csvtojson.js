const fs = require('fs');
const { listeners } = require('process');
const food = fs.readFileSync('food.csv');

// csvtoJSON

// const getSomething =  async function(url) {
//      const something = await fetch(url);
//      const somethingElse = something.toJSON();

//     ;
// }

export default CSVToJSON = (csv) => {
  const arr = csv.toString().split('/n');
  const headers = arr[0].split(',');
  return arr.slice(1).map((line) => {
    return line.split(',').reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
};

const foodJSON = () => console.log(CSVToJSON(food));
