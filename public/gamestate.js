function generateDefaultPlayerStates() {
    var gamestate = {
        players: 4,
        lifeTotals: 40,
        playerNames: [
            'Player 1', 'Player 2', 'Player 3', 'Player 4'
        ],
        playerStates: Array()
    }

    var idx = 1
    for (var player of gamestate.playerNames) {
        var state = new Object()
        state["id"] = idx,
            state["name"] = player,
            state["life"] = gamestate.lifeTotals,
            state["dead"] = false,
            state["monarch"] = false,
            state["poison"] = 0,
            state["energy"] = 0,
            state["exp"] = 0,
            state["commanderDmg"] = gamestate.playerNames.filter((n) => n !== player).map((p) => ({ [p]: 0 }))

        gamestate.playerStates.push(state)
        idx++
    }

    return (gamestate)
}

// let defaultGamestate = generateDefaultPlayerStates();

export default generateDefaultPlayerStates