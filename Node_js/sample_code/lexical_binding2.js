
const person={
    name:"bhupendra",
    last:"mestry",
    hello:function(){
             let me="Heloo function"
           let c={
            parent_var_flm:'test_p_var',
            fullname:()=>{
                //     function fullname(){
                     console.log(`This key word in person ahellwo -. full anem ${JSON.stringify(this)}`)
                     // This key word point to enclosing lexical context
                     return `${this.name} ${this.last} ${this.me} ${this.parent_var_flm}`
                 }
        }
         
     console.log(`my full name ${c.fullname()}`)   
    }
}
var varglob="global_keyword"
const test={
    key:"keyvalue",
     access_lexical:function (){
        console.log(this.key);
    }
}


function check_this(){
    let name_key='namevalu'
    console.log(this)
}

person.hello();
console.log(`\n----------`)
// test.access_lexical();
console.log(`\n----------`)

// check_this()