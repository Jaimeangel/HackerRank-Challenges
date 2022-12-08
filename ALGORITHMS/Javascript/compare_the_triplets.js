const compare_the_triplets=(a,b)=>{
    const length_data=a.length;
    let sumA=0
    let sumB=0

    for (let index = 0; index < length_data; index++) {
        if (a[index]>b[index]){
            sumA+=1
        }else if(a[index]<b[index]){
            sumB+=1
        }
    }
    return [sumA,sumB]
}