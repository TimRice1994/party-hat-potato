from xml.dom import minidom
import re
from collections import Counter
import urllib.request
import time

masterCount = Counter()
fp = open('countOut.txt', 'w')
opener = urllib.request.build_opener()
numBoardGames = 0
numErrors = 0
start = time.time()

for i in range(1,250000):
	time.sleep(0.25) # to avoid 503 errors
	try:
		url = 'https://www.boardgamegeek.com/xmlapi2/thing?id=' + str(i)
		resp = opener.open(url).read()
		xml = minidom.parseString(resp.decode('utf-8'))
		item = xml.getElementsByTagName('item')
		if item:
			typeEl = item[0].attributes['type'].value
		if typeEl == 'boardgame':
			try:
				desc = str(xml.getElementsByTagName('description')[0].firstChild.nodeValue)
			except IndexError:
				continue
			words = re.sub("[^\w]", " ", desc).lower().split()
			counts = Counter(words)
			masterCount += counts
			numBoardGames += 1
			print(i)
	except KeyboardInterrupt:
		break;
	except:
		print("ERROR")
		numErrors += 1
		continue

print (time.time() - start)
print (numErrors)
fp.write(str(masterCount))