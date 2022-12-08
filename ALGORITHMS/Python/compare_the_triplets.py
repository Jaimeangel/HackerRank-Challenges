def compare_the_triplets(a,b):
    length_data=len(a)
    sumA=0
    sumB=0
    for i in range(length_data):
        if a[i]>b[i]:
            sumA+=1
        elif a[i]<b[i]:
            sumB+=1
    return [sumA,sumB]