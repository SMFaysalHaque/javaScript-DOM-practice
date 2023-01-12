console.log(100);
console.log(document); //here document is an object where our whole website stable.
// console.log(document.body); // this a part of an object.


// document.getElementsByTagName('h3'); it's only run on browser.
// document.getElementsByTagName('article'); it's only run on browser.

// if we want to show these tags from our .js file we have to do bellow task:

// // find innerText form a tag "h3":
const blogsTitle = document.getElementsByTagName('h3');
console.log(blogsTitle);

//we can use "for loop" or "for of loop"
// for(let i = 0; i < blogsTitle.length; i++){
//     // console.log(h3);
//     // console.log(blogsTitle[i].innerText); 
// }
for(const h3 of blogsTitle){
    console.log(h3);
    // console.log(h3.innerText);
} 

// find innerText form a tag "p":
const blogDetails = document.getElementsByTagName('p'); 
for(const p of blogDetails){
    console.log(p.innerText);
}

// using id property in js file:

// document.getElementById('second-title').style.textAlign = "center";
// we can center a property another way, using variable:
const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = "center";
secondTitle.style.color = "coral";

// third title design update:
const thirdTitle = document.getElementById('third-title');
thirdTitle.innerText = "Update Title Name By JS!!!"
thirdTitle.style.textAlign = "center"
thirdTitle.style.backgroundColor = "lightBlue"

// tag design:
// const articleDesign = document.getElementsByTagName('article');
// console.log(articleDesign);
// for(const design of articleDesign){
//     design.style.color = "red";
// }
const articleDesign = document.getElementsByTagName('article');
// console.log(articleDesign);
for(const design of articleDesign){
    design.style.color = "black";
    design.style.margin = "100px";
    design.style.padding ="20px";
    design.style.border = "2px solid black";
    design.style.borderRadius = "10px"; 
}

