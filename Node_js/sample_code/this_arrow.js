
const arrow={
    parent:"Enclosing Context Var",
    exec:function(){
        c={
            c_var:"c var",
            check_access_arrow:()=>{
              return ` ${this.parent}, ${this.c_var}`
            },
            check_access:function (){
                return ` ${this.parent}, ${this.c_var}`
            }

        }
        console.log("access",c.check_access());
        console.log("arrow ",c.check_access_arrow())
    }
}

arrow.exec();