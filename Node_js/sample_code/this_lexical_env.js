
const log=console.log
const p={
    b:"Parent Scope",
    s:function(){
    
        d={
            r:" D scope",
            run:function(){
                log(`r should not be  access with =>  ${this.r}-Working`)
                log(`* n should be access with => ${this.b} as it enclosed lexical scope -Not Working * `)
                }
            
        }
        d.run()
    }
}; 
p.s()

