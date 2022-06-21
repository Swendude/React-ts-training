const getallen = [8, 14, 6, 10];

const dubbels = getallen.map((getal) => {
  return getal * 4;
});

const hogerDanNegen = getallen.filter((getal) => {
  return getal > 9;
});

const veertien = getallen.find((getal) => {
  return getal / 2 === 7;
});
console.log(dubbels);
console.log(hogerDanNegen);
console.log(veertien);
// const regen = true;

// // if (regen) {
// //   console.log("het regent");
// // } else {
// //   console.log("de zon schijnt");
// // }

// // const resultaat = regen ? "het regent" : "de zon schijnt";
// const resultaat = regen && "het regent";

// console.log(resultaat);
