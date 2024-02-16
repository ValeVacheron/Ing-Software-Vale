
class Nodo:
    
    def __init__(self,el,nizq,nder,padre,raiz):
        
        self.el=el
        self.nizq=nizq
        self.nder=nder
        self.padre=padre
        self.raiz=raiz

    def __str__(self):
        return str(self.el)


class Arbol:

    def __init__(self, raiz):
        self.raiz=raiz

    def agregar(self,elem):
        if self.raiz == None:
            self.raiz=Nodo(elem,None,None,None,None)
        else:
            nodoact=self.raiz
            while True:
                if elem >= nodoact.el:
                    if nodoact.nder == None:
                        nodoact.nder= Nodo(elem,None,None,nodoact,self.raiz)
                        return
                    nodoact = nodoact.nder
                elif elem <=nodoact.el:
                    if nodoact.nizq == None:
                        nodoact.nizq= Nodo(elem,None,None,nodoact,self.raiz)
                        return
                    nodoact = nodoact.nizq
                else:
                    return 

    
    def preaux(self,nodo):
        
        if nodo==None:
            return
        print(nodo.el)
        self.preaux(nodo.nizq)
        self.preaux(nodo.nder)

    def preorden(self):
        self.preaux(self.raiz)


    def inaux(self,nodo):
        
        if nodo==None:
            return
        self.inaux(nodo.nizq)
        print(nodo.el)
        self.inaux(nodo.nder)
        
    def inorden(self):
        self.inaux(self.raiz)

    def postaux(self,nodo):
        if nodo==None:
            return
        self.postaux(nodo.nizq)
        self.postaux(nodo.nder)
        print(nodo.el)
        
    def postorden(self):
        self.postaux(self.raiz)



