
const N_MIN=1;
const N_MAX=500;
const T=10;
 
 

const ninja=function(n){
    if(n<N_MIN || n>N_MAX) {
     console.log(`Invalid input | input rage should be between ${N_MIN} < n <${N_MAX}`)
        return 0
    }
        //Counter for series pattern
    let contr=0
    let final_str=''

    for(let i=1;i<=n;i++){
        let text=''

        // create group of row with series
        for(let k=1;k<=i;k++){
            // Series Reset after reaching T value
            contr=(contr==T-1)?1:contr+1;
            text=`${text}${contr}`
        }
        final_str+=`${text} `
    }
    console.log(final_str)
}

ninja(6);