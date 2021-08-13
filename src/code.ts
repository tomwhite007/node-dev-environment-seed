const name = ["ball", "bat", "glove", "glove", "glove"];
const price = [2, 3, 1, 2, 1];
const weight = [2, 5, 1, 1, 1];
const dups = numDuplicates(name, price, weight);
console.log("number of duplicates", dups);

function numDuplicates(name: string[], price: number[], weight: number[]) {
  if (name.length > 1000000) {
    throw new Error("Constraint: greater than 10 to the 5");
  }

  const stringifiedArray: string[] = [];
  for (let i = 0; i < name.length; i++) {
    if (!name[i].match(/^[a-z/]{1,10}$/)) {
      throw new Error("Constraint: name text is not the right size or chars");
    }
    if (price[i] < 1) {
      throw new Error("Constraint: price is too small");
    }
    if (weight[i] > 1000) {
      throw new Error("Constraint: weight is too heavy");
    }
    stringifiedArray.push(`${name[i]}, ${price[i]}, ${weight[i]}`);
  }
  console.log("merged", stringifiedArray);

  const duplicates = stringifiedArray.filter(
    (item, index) => stringifiedArray.indexOf(item) !== index
  );
  console.log("duplicates", duplicates);

  return duplicates.length;
}
