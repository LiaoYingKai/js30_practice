console.log("hello");

console.log("hello %s", "kai");

console.log("%cHello", "font-size:24px ;color:red");

console.warn("Oh Shit!!");

console.error("Oh FUCK");

console.info("some info");

console.assert(1 === 1, "that is wrong");

console.assert(1 === 2, "that is wrong");

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });