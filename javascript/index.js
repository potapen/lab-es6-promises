// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
*/


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
            document.querySelector('#mashedPotatoesImg').hidden=false
          });
        });
      });
    });
  });
});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  }).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  }).then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  }).then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  }).then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  }).then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  }).then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  }).then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 8)
  }).then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    document.querySelector('#steakImg').hidden=false
  })



// Iteration 3 using async/await
async function makeBroccoli() {
  for(let i=0 ; i<broccoli.length ; i++){
    const instruction = await obtainInstruction('broccoli', i)
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`
  }
  document.querySelector('#broccoliImg').hidden=false


}
makeBroccoli()
// Bonus 2 - Promise all
// const b0 = obtainInstruction('brusselsSprouts', 0)
// const b1 = obtainInstruction('brusselsSprouts', 1)
// const b2 = obtainInstruction('brusselsSprouts', 2)
// const b3 = obtainInstruction('brusselsSprouts', 3)
// const b4 = obtainInstruction('brusselsSprouts', 4)
// const b5 = obtainInstruction('brusselsSprouts', 5)
// const b6 = obtainInstruction('brusselsSprouts', 6)
// const b7 = obtainInstruction('brusselsSprouts', 7)
// const b8 = obtainInstruction('brusselsSprouts', 8)

const promises = []
for (let i=0 ; i<brusselsSprouts.length ; i++){
  const promise = obtainInstruction('brusselsSprouts', i)
  promises.push(promise)
}

Promise.all( promises ).then((values)=>{
  values.forEach( value => document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`)
  document.querySelector('#brusselsSproutsImg').hidden=false
})

