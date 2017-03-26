from enum import Enum
import copy
import time

DECKSIZE = 16

class Card(Enum):
	GUARD = 1
	PRIEST = 2
	BARON = 3
	HANDMAID = 4
	PRINCE = 5
	KING = 6
	COUNTESS = 7
	PRINCESS = 8
	
	def __lt__(self, other):
		return self.value < other.value
	
class NodeType(Enum):
	BEGIN = 0
	DEAL = 1
	DRAW = 2
	CHOICE = 3
	EFFECT = 4
	LEAF = 5
	
class Player:
	def __init__(self, orig=None):
		if (orig == None):
			self.default_constructor()
		else:
			self.copy_constructor(orig)
			
	def default_constructor(self):
		self.cardsInHand = []
		self.isProtected = False
		self.isEliminated = False
	
	def copy_constructor(self, orig):
		self.cardsInHand = copy.deepcopy(orig.cardsInHand)
		self.isProtected = copy.deepcopy(orig.isProtected)
		self.isEliminated = copy.deepcopy(orig.isEliminated)
	
class GameState:
	def __init__(self, orig=None):
		if (orig == None):
			self.default_constructor()
		else:
			self.copy_constructor(orig)
			
	def default_constructor(self):
		self.players = []
		self.cardsInDeck = []
		self.type = NodeType.BEGIN
		self.currPlayer = 0
		self.currCard = None
	
	def copy_constructor(self, orig):
		self.players = []
		self.players.append(Player(orig.players[0]))
		self.players.append(Player(orig.players[1]))
		self.players.append(Player(orig.players[2]))
		self.players.append(Player(orig.players[3]))
		self.cardsInDeck = copy.deepcopy(orig.cardsInDeck)
		self.type = copy.deepcopy(orig.type)
		self.currPlayer = copy.deepcopy(orig.currPlayer)
		self.currCard = copy.deepcopy(orig.currCard)

def getUniqueCards(deck):
	uniqueCards = []
	for card in deck:
		if not (card in uniqueCards):
			uniqueCards.append(card)
	return uniqueCards
	
def onePlayerRemaining(gs):
	numAlive = 0
	for player in gs.players:
		if not player.isEliminated:
			numAlive += 1
	if numAlive == 1: return True
	else: return False

def activateGuard(gs):
	# branch for incorrect guess/all others protected always an option
	childStates = []
	childState = GameState(gs)
	childState.type = NodeType.DRAW
	childStates.append(childState)
	
	# branch for left player not eliminated, not protected, & no guard in hand
	if (not gs.players[(gs.currPlayer + 1) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 1) % 4].isProtected) and (not (Card.GUARD in gs.players[(gs.currPlayer + 1) % 4].cardsInHand)):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 1) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for across player not eliminated, not protected, & no guard in hand
	if (not gs.players[(gs.currPlayer + 2) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 2) % 4].isProtected) and (not (Card.GUARD in gs.players[(gs.currPlayer + 2) % 4].cardsInHand)):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 2) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
	
	# branch for right player not eliminated, not protected, & no guard in hand
	if (not gs.players[(gs.currPlayer + 3) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 3) % 4].isProtected) and (not (Card.GUARD in gs.players[(gs.currPlayer + 3) % 4].cardsInHand)):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 3) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	return childStates

def activateBaron(gs):
	childStates = []
	
	# branch for left player not eliminated, no handmaid, card higher than left player
	if (not gs.players[(gs.currPlayer + 1) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 1) % 4].isProtected) and (gs.players[(gs.currPlayer + 1) % 4].cardsInHand[0] < gs.players[gs.currPlayer].cardsInHand[0]):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 1) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for across player not eliminated, no handmaid, card higher than across player
	if (not gs.players[(gs.currPlayer + 2) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 2) % 4].isProtected) and (gs.players[(gs.currPlayer + 2) % 4].cardsInHand[0] < gs.players[gs.currPlayer].cardsInHand[0]):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 2) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for right player not eliminated, no handmaid, card higher than right player
	if (not gs.players[(gs.currPlayer + 3) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 3) % 4].isProtected) and (gs.players[(gs.currPlayer + 3) % 4].cardsInHand[0] < gs.players[gs.currPlayer].cardsInHand[0]):
		childState = GameState(gs)
		childState.players[(childState.currPlayer + 3) % 4].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for current player having a lower card than any other eligible player
	if ((not gs.players[(gs.currPlayer + 1) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 1) % 4].isProtected) and (gs.players[(gs.currPlayer + 1) % 4].cardsInHand[0] > gs.players[gs.currPlayer].cardsInHand[0])) or ((not gs.players[(gs.currPlayer + 2) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 2) % 4].isProtected) and (gs.players[(gs.currPlayer + 2) % 4].cardsInHand[0] > gs.players[gs.currPlayer].cardsInHand[0])) or ((not gs.players[(gs.currPlayer + 3) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 3) % 4].isProtected) and (gs.players[(gs.currPlayer + 3) % 4].cardsInHand[0] > gs.players[gs.currPlayer].cardsInHand[0])):
		childState = GameState(gs)
		childState.players[childState.currPlayer].isEliminated = True
		if onePlayerRemaining(childState):
			childState.type = NodeType.LEAF
		else:
			childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for all other players eliminated or protected, or current player is tied with any other eligible player
	if (((gs.players[(gs.currPlayer + 1) % 4].isEliminated) or (gs.players[(gs.currPlayer + 1) % 4].isProtected)) and ((gs.players[(gs.currPlayer + 2) % 4].isEliminated) or (gs.players[(gs.currPlayer + 2) % 4].isProtected)) and ((gs.players[(gs.currPlayer + 3) % 4].isEliminated) or (gs.players[(gs.currPlayer + 3) % 4].isProtected))) or (gs.players[(gs.currPlayer + 1) % 4].cardsInHand[0] == gs.players[gs.currPlayer].cardsInHand[0]) or (gs.players[(gs.currPlayer + 2) % 4].cardsInHand[0] == gs.players[gs.currPlayer].cardsInHand[0]) or (gs.players[(gs.currPlayer + 3) % 4].cardsInHand[0] == gs.players[gs.currPlayer].cardsInHand[0]):
		childState = GameState(gs)
		childState.type = NodeType.DRAW
		childStates.append(childState)
		
	return childStates

def activateHandmaid(gs):
	childStates = []
	childState = GameState(gs)
	childState.type = NodeType.DRAW
	childState.players[childState.currPlayer].isProtected = True
	childStates.append(childState)
	return childStates
	
def activatePrince(gs):
	childStates = []
	
	# branch for discarding your own card is always an option
	if gs.cardsInDeck:
		for card in getUniqueCards(gs.cardsInDeck):
			childState = GameState(gs)
			if childState.players[childState.currPlayer].cardsInHand[0] == Card.PRINCESS:
				childState.players[childState.currPlayer].isEliminated = True
			childState.players[childState.currPlayer].cardsInHand.pop()
			childState.cardsInDeck.remove(card)
			childState.players[childState.currPlayer].cardsInHand.append(card)
			if onePlayerRemaining(childState):
				childState.type = NodeType.LEAF
			else:
				childState.type = NodeType.DRAW
			childStates.append(childState)
	else:
		childState = GameState(gs)
		childState.type = NodeType.LEAF
		childStates.append(childState)
	
	# branch for left player not eliminated or protected
	if (not gs.players[(gs.currPlayer + 1) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 1) % 4].isProtected):
		if gs.cardsInDeck:
			for card in getUniqueCards(gs.cardsInDeck):
				childState = GameState(gs)
				if childState.players[(childState.currPlayer + 1) % 4].cardsInHand[0] == Card.PRINCESS:
					childState.players[(childState.currPlayer + 1) % 4].isEliminated = True
				childState.players[(childState.currPlayer + 1) % 4].cardsInHand.pop()
				childState.cardsInDeck.remove(card)
				childState.players[(childState.currPlayer + 1) % 4].cardsInHand.append(card)
				if onePlayerRemaining(childState):
					childState.type = NodeType.LEAF
				else:
					childState.type = NodeType.DRAW
				childStates.append(childState)
		else:
			childState = GameState(gs)
			childState.type = NodeType.LEAF
			childStates.append(childState)
			
	# branch for across player not eliminated or protected
	if (not gs.players[(gs.currPlayer + 2) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 2) % 4].isProtected):
		if gs.cardsInDeck:
			for card in getUniqueCards(gs.cardsInDeck):
				childState = GameState(gs)
				if childState.players[(childState.currPlayer + 2) % 4].cardsInHand[0] == Card.PRINCESS:
					childState.players[(childState.currPlayer + 2) % 4].isEliminated = True
				childState.players[(childState.currPlayer + 2) % 4].cardsInHand.pop()
				childState.cardsInDeck.remove(card)
				childState.players[(childState.currPlayer + 2) % 4].cardsInHand.append(card)
				if onePlayerRemaining(childState):
					childState.type = NodeType.LEAF
				else:
					childState.type = NodeType.DRAW
				childStates.append(childState)
		else:
			childState = GameState(gs)
			childState.type = NodeType.LEAF
			childStates.append(childState)
			
	# branch for right player not eliminated or protected
	if (not gs.players[(gs.currPlayer + 3) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 3) % 4].isProtected):
		if gs.cardsInDeck:
			for card in getUniqueCards(gs.cardsInDeck):
				childState = GameState(gs)
				if childState.players[(childState.currPlayer + 3) % 4].cardsInHand[0] == Card.PRINCESS:
					childState.players[(childState.currPlayer + 3) % 4].isEliminated = True
				childState.players[(childState.currPlayer + 3) % 4].cardsInHand.pop()
				childState.cardsInDeck.remove(card)
				childState.players[(childState.currPlayer + 3) % 4].cardsInHand.append(card)
				if onePlayerRemaining(childState):
					childState.type = NodeType.LEAF
				else:
					childState.type = NodeType.DRAW
				childStates.append(childState)
		else:
			childState = GameState(gs)
			childState.type = NodeType.LEAF
			childStates.append(childState)
	
	return childStates

def activateKing(gs):
	childStates = []
	
	# branch for swap with left player
	if (not gs.players[(gs.currPlayer + 1) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 1) % 4].isProtected):
		childState = GameState(gs)
		temp = childState.players[childState.currPlayer].cardsInHand[0]
		childState.players[childState.currPlayer].cardsInHand.pop()
		childState.players[childState.currPlayer].cardsInHand.append(childState.players[(childState.currPlayer + 1) % 4].cardsInHand[0])
		childState.players[(childState.currPlayer + 1) % 4].cardsInHand.pop()
		childState.players[(childState.currPlayer + 1) % 4].cardsInHand.append(temp)
		childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for swap with across player
	if (not gs.players[(gs.currPlayer + 2) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 2) % 4].isProtected):
		childState = GameState(gs)
		temp = childState.players[childState.currPlayer].cardsInHand[0]
		childState.players[childState.currPlayer].cardsInHand.pop()
		childState.players[childState.currPlayer].cardsInHand.append(childState.players[(childState.currPlayer + 2) % 4].cardsInHand[0])
		childState.players[(childState.currPlayer + 2) % 4].cardsInHand.pop()
		childState.players[(childState.currPlayer + 2) % 4].cardsInHand.append(temp)
		childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for swap with right player
	if (not gs.players[(gs.currPlayer + 3) % 4].isEliminated) and (not gs.players[(gs.currPlayer + 3) % 4].isProtected):
		childState = GameState(gs)
		temp = childState.players[childState.currPlayer].cardsInHand[0]
		childState.players[childState.currPlayer].cardsInHand.pop()
		childState.players[childState.currPlayer].cardsInHand.append(childState.players[(childState.currPlayer + 3) % 4].cardsInHand[0])
		childState.players[(childState.currPlayer + 3) % 4].cardsInHand.pop()
		childState.players[(childState.currPlayer + 3) % 4].cardsInHand.append(temp)
		childState.type = NodeType.DRAW
		childStates.append(childState)
		
	# branch for all other players protected or eliminated
	if ((gs.players[(gs.currPlayer + 1) % 4].isEliminated) or (gs.players[(gs.currPlayer + 1) % 4].isProtected)) and ((gs.players[(gs.currPlayer + 2) % 4].isEliminated) or (gs.players[(gs.currPlayer + 2) % 4].isProtected)) and ((gs.players[(gs.currPlayer + 3) % 4].isEliminated) or (gs.players[(gs.currPlayer + 3) % 4].isProtected)):
		childState = GameState(gs)
		childState.type = NodeType.DRAW
		childStates.append(childState)
	
	return childStates
	
def activatePrincess(gs):
	childStates = []
	childState = GameState(gs)
	childState.players[childState.currPlayer].isEliminated = True
	if onePlayerRemaining(childState):
		childState.type = NodeType.LEAF
	else:
		childState.type = NodeType.DRAW
	childStates.append(childState)
	return childStates
	
def calculateNumPaths(gs):
	numPaths = 0
	childStates = []
	
	if (gs.type == NodeType.BEGIN):
		for card in getUniqueCards(gs.cardsInDeck):
			childState = GameState(gs)
			childState.cardsInDeck.remove(card)
			childState.type = NodeType.DEAL
			childStates.append(childState)
		for state in childStates:
			numPaths += calculateNumPaths(state)
		return numPaths
	
	elif (gs.type == NodeType.DEAL):
		for card in getUniqueCards(gs.cardsInDeck):
			childState = GameState(gs)
			childState.cardsInDeck.remove(card)
			childState.players[childState.currPlayer].cardsInHand.append(card)
			childState.currPlayer = (childState.currPlayer + 1) % 4
			if len(childState.cardsInDeck) == (DECKSIZE - 5):
				childState.type = NodeType.DRAW
			childStates.append(childState)
		for state in childStates:
			numPaths += calculateNumPaths(state)
		return numPaths
		
	elif (gs.type == NodeType.DRAW):
		for card in getUniqueCards(gs.cardsInDeck):
			childState = GameState(gs)
			childState.cardsInDeck.remove(card)
			childState.players[childState.currPlayer].cardsInHand.append(card)
			childState.type = NodeType.CHOICE
			childState.players[childState.currPlayer].isProtected = False
			childStates.append(childState)
		for state in childStates:
			numPaths += calculateNumPaths(state)
		return numPaths
		
	elif (gs.type == NodeType.CHOICE):
		if (Card.COUNTESS in gs.players[gs.currPlayer].cardsInHand and Card.PRINCE in gs.players[gs.currPlayer].cardsInHand) or (Card.COUNTESS in gs.players[gs.currPlayer].cardsInHand and Card.KING in gs.players[gs.currPlayer].cardsInHand):
			childState = GameState(gs)
			childState.currCard = Card.COUNTESS
			childState.players[childState.currPlayer].cardsInHand.remove(Card.COUNTESS)
			childState.type = NodeType.EFFECT
			childStates.append(childState)
		elif gs.players[gs.currPlayer].cardsInHand[0] == gs.players[gs.currPlayer].cardsInHand[1]:
			childState = GameState(gs)
			childState.currCard = childState.players[childState.currPlayer].cardsInHand[1]
			childState.players[childState.currPlayer].cardsInHand.pop()
			childState.type = NodeType.EFFECT
			childStates.append(childState)
		else:
			for card in gs.players[gs.currPlayer].cardsInHand:
				childState = GameState(gs)
				childState.currCard = card
				childState.players[childState.currPlayer].cardsInHand.remove(card)
				childState.type = NodeType.EFFECT
				childStates.append(childState)
		for state in childStates:
			numPaths += calculateNumPaths(state)
		return numPaths
		
	elif (gs.type == NodeType.EFFECT):
		if (gs.currCard == Card.GUARD): childStates = activateGuard(gs)
		elif (gs.currCard == Card.BARON): childStates = activateBaron(gs)
		elif (gs.currCard == Card.HANDMAID): childStates = activateHandmaid(gs)
		elif (gs.currCard == Card.PRINCE): childStates = activatePrince(gs)
		elif (gs.currCard == Card.KING): childStates = activateKing(gs)
		elif (gs.currCard == Card.PRINCESS): childStates = activatePrincess(gs)
		else:
			childState = GameState(gs)
			childState.type = NodeType.DRAW
			childStates.append(childState)
		for state in childStates:
			state.currPlayer = (state.currPlayer + 1) % 4
			while state.players[state.currPlayer].isEliminated:
				state.currPlayer = (state.currPlayer + 1) % 4
			if not state.cardsInDeck:
				state.type = NodeType.LEAF
			numPaths += calculateNumPaths(state)
		return numPaths
		
	elif (gs.type == NodeType.LEAF):
		return 1
		
	else: print ("TYPE ERROR")

start = time.time()
gs = GameState()
for i in range(4):
	gs.players.append(Player())
gs.cardsInDeck.append(Card.GUARD)
gs.cardsInDeck.append(Card.GUARD)
gs.cardsInDeck.append(Card.GUARD)
gs.cardsInDeck.append(Card.GUARD)
gs.cardsInDeck.append(Card.GUARD)
gs.cardsInDeck.append(Card.PRIEST)
gs.cardsInDeck.append(Card.PRIEST)
gs.cardsInDeck.append(Card.BARON)
gs.cardsInDeck.append(Card.BARON)
gs.cardsInDeck.append(Card.HANDMAID)
gs.cardsInDeck.append(Card.HANDMAID)
gs.cardsInDeck.append(Card.PRINCE)
gs.cardsInDeck.append(Card.PRINCE)
gs.cardsInDeck.append(Card.KING)
gs.cardsInDeck.append(Card.COUNTESS)
gs.cardsInDeck.append(Card.PRINCESS)

print (calculateNumPaths(gs))
print (time.time() - start)