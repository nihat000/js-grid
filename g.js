for (let i=1;i<=10;i++){
    for (let j=1;j<=10;j++){
        let el = document.createElement('div');
        el.classList = `g-${i}-${j}`;
        document.querySelector('.container .box').append(el)
    }
}

let words = ['adam','ada','madam']
let direction = "v"
let pos = [3,3]
print(words[0])




function print(str){

    for(let i=0;i<str.length;i++){
        document.querySelector(`.g-${pos[0]}-${pos[1]} `).innerText = str[i]
        if (direction =='v' && i < str.length-1 ){
            pos[0]++
        }
        else if (direction == 'h' && i < str.length-1)
            pos[1]++
        }

    }    

while(true){
    let quit = false;
    while(true){
        let
    }
}



