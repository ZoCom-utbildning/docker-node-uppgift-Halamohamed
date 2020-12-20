const b1 = document.createElement('button');
const b2 = document.createElement('button');
const b3 = document.createElement('button');


fetch('/', {
    method: 'GET'
})
.then(res => res.json())
.then(response => {
    
    b1.addEventListener(
        response.json(roll.roll('d6').result)
    )
    b2.addEventListener(
        response.json(roll.roll('d12').result)
    )
    b3.addEventListener(
        response.json(roll.roll('d20').result)
    )
    document.querySelector('#btn1').appendChild(b1);
    document.querySelector('#btn1').appendChild(b2);
    document.querySelector('#btn1').appendChild(b3);
});

function printDies(res){
    
    b1.innerText = "six";
    b1.innerText = "twelve";
    b1.innerText = "twenty";
    b1.addEventListener(
        res.roll.roll('d6').result
    )
    b2.addEventListener(
        res.roll.roll('d12').result
    )
    b3.addEventListener(
        res.roll.roll('d20').result
    )
    document.querySelector('#btn1').appendChild(b1);
    document.querySelector('#btn1').appendChild(b2);
    document.querySelector('#btn1').appendChild(b3);
   
}