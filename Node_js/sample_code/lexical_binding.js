
const person={
    name:"bhupendra",
    last:"mestry",
    hello:function(){
        let parent_var_flm="testing"
       const fullname=()=>{
       //     function fullname(){
            console.log(`This key word in person ahellwo -. full anem ${this}`)
            // This key word point to enclosing lexical context
            return `${this.name} ${this.last} ${this.parent_var_flm}`
        }
     console.log(`my full name ${fullname()}`)   
    },
    hello2:function(){
        
        let parent_var_flm="testing"
       const fullname=function(){
       //     function fullname(){
            console.log(`This key word in person ahellwo -. full anem ${this}`)
            // This key word point to enclosing lexical context
            return `${this.name} ${this.last} ${this.parent_var_flm}`
        }
     console.log(`my full name ${fullname()}`)   
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
person.hello2();
console.log(`\n----------`)
// test.access_lexical();
console.log(`\n----------`)

// check_this()