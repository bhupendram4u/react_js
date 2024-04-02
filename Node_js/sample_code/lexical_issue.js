const a={b:"hello",run:()=>{console.log(this.b)}};  
// a.run()


const log=console.log();

const p={
    b:"hello",
    s:function(){
        let n="Lexical Parent Scope"
        d={
            r:" D scope",
            run:()=>{console.log(this.r,this.n)}
            
        }
        d.run()
    }
}; 



//a.run()
p.s()