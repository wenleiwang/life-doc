import time

for i in range(100 + 1): 
    a = '*' * i
    b = '-' * (100 - i)
    print(\r'[{}->{}]{:^3}'.format(a,b,i))
    time.sleep(0.1)