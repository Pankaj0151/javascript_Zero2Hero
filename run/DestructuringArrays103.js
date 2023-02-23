
const nested = [1, 2, 3, [2, 3]]
const nested_one = [1, 2, 3, [2, 3]]
//test
const spreadOp = [...nested, ...nested_one]
const concatOp = nested.concat(nested_one);
//test cmnt by pankaj


// const [i,j,k,[a,b]] =nested;

// console.log([i,k,a,b])
console.log(spreadOp)
console.log(concatOp)