import csv
import json
csv_file  = open("E:\cusmat\pyhton script\Sample - Superstore (1).csv")

csv_reader = csv.reader(csv_file)

field_names = next(csv_reader)
data = []
for row in csv_reader:
    data.append(dict(zip(field_names,row)))

print(data)

