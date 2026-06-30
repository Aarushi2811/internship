//closure function counter
function outerFunc(){
    let count=0
    return function incCount(){
        count++;
        console.log(count)
    }
}

let counter=outerFunc();
counter();
counter();
counter();
counter();
counter();

