function Area(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a*b)
        }, 2000)
    });
};

async function output(a,b){
    const result = await Area(a,b);
    console.log(result);
};

output(12,2);