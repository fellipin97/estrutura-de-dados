# Exemplo de código sem estrutura de dados
def soma_elementos(lista):
    soma = 0
    for i in range(len(lista)):
        soma += lista[i]
    return soma

# Código otimizado usando uma estrutura de dados adequada
def soma_elementos_otimizado(lista):
    return sum(lista)

# Teste
import time

# Lista grande para teste
grande_lista = [i for i in range(1000000)]

# Medindo o tempo do código sem estrutura de dados adequada
start_time = time.time()
print("Soma sem tratamento: ", soma_elementos(grande_lista))
print("Tempo sem tratamento: %s seconds" % (time.time() - start_time))

# Medindo o tempo do código otimizado
start_time = time.time()
print("Soma com tratamento: ", soma_elementos_otimizado(grande_lista))
print("Tempo com tratamento: %s seconds" % (time.time() - start_time))
