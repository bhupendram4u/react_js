

let str = "yyyyyyyyyyyereeyyerrrrrr"

const compressString = (str) => {
    let res = []
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            res.push(`${count}${str[i]}`)
            count = 1
            continue
        }
        if (count == 8) {
            res.push(`${count}${str[i]}`)
            count = 1
        }
    }
    return res.concat('')
}

const validateString=(str)=>{
    return true
}


let compstr=compressString(str)
console.log(` COmpress String ${compstr}`)