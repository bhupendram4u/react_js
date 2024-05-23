var fullname="Outer varibale - global"
const log=console.log
obj={
    fullname:"Object Full Name",
    prop:{
        fullname:"Propfull name",
        getFullname:function(){
            return this.fullname
        }
    },
    getFullname:function(){
        return this.fullname
    },
    getFullnameV2:()=>this.fullname,
    getFullnameV3:(function(){
        return this.fullname
    })(),

}

log(obj.prop.getFullname());
log(obj.getFullname());
log(obj.getFullnameV2());
log(obj.getFullnameV3());