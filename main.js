const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //FOREACH method

//   const comp = companies.forEach(function(item){
//       console.log(item);
//   })

//FILTER method

// const fil_comp = companies.filter(function(item){
//     return item.start >1989
// })

// console.log(fil_comp);
// fil_comp2 = fil_comp.forEach(function(item){
//     console.log(item.category)
// })

// const fil_age = ages.filter(function(item){
//     return item > 34
// })

// const fil_age2 = ages.filter(age => age > 21)
// console.log(fil_age2);

// const fil_retail = companies.filter(item => item.category =='Retail')
// console.log(fil_retail);

// const comp_80 = companies.filter(item => (item.start > 1980)&&(item.start<1990))
// console.log(comp_80);

// const comp_10 = companies.filter(item => ((item.end)-(item.start)>=10))
// console.log(comp_10);


//MAP method

// const comp_map = companies.map(function(item){
//     return {
//         first: item.name,
//         second: item.start
//     }
// })
// console.log(comp_map);

// const test_map = companies.map(item => `${item.name} [${item.start} - ${item.end}]`)
// console.log(test_map)

// const test_age = ages.map(item => Math.sqrt(item))
// console.log(test_age);

//SORT

// const comp_sort = companies.sort(function(item1,item2){
//     if (item1.start > item2.start){
//         return 1
//     }else{
//         return -1
//     }
     
// })
// console.log(comp_sort);

// const comp_sort2 = companies.sort((a,b) => (a.start > b.start) ? 1:-1)
// console.log(comp_sort2);

// console.log(ages.sort((a,b)=> a-b))
// console.log(ages.sort((a,b)=> b-a))

//REDUCE

// const comp_age = ages.reduce(function(acc,currItem){
//     total= acc+currItem;
//     return ;
// },0)

// console.log(comp_age);

// const comp_age = ages.reduce((acc,currItem) => acc+currItem,0)
// console.log(comp_age)

// const totalYears = companies.reduce(function(acc, currItem){
//     return acc+(currItem.end - currItem.start)
// },1)
// console.log(totalYears);

// const totalYears = companies.reduce((acc, currItem) => acc+(currItem.end-currItem.start),0);
// console.log(totalYears);

//USING ALL IN COMBINATION

const all_age = ages
        .map(item => item*2)
        .filter(item => item > 40)
        .sort((a,b) => a-b)
        .reduce((acc, currItem) => acc+currItem ,0)

console.log(all_age);