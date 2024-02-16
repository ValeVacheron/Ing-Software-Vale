def contar(l):
    nivelact=0
    valles=0
    for i in l:
        if i == "D":
            if nivelact == 0:
                nivelact-=1
                valles +=1
            else:
                nivelact-=1
        if i=="Ú":
            nivelact+=1
    return valles


