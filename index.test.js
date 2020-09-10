const findElevatorPath = require('./index.js')

it('finds a route with a given array', () => {

    const elevatorStates = [
        // State @ t=1
        `xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xxAx.x.x.xx`,
        // State @ t=2
        `xx.x.x.x.xx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xx.x.x.xDxx`,
        // State @ t=3
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx
        xx.x.x.xDxx`,
        // State @ t=4
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.xBx.xDxx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.x.x.x.xx`,
        // State @ t=5
        `xx.x.xCx.xx
        xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx`,
    ]
    
    const startingElevator = 'A'
    const finalDestination = '5-5'
    const expectedOutput = 'AABDD'

    expect(findElevatorPath(elevatorStates, startingElevator, finalDestination)).toBe(expectedOutput)
})

it('finds a route starting in elevator B', () => {

    const elevatorStates = [
        // State @ t=1
        `xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.x.xCx.xx
        xx.xBx.x.xx`,
        // State @ t=2
        `xx.x.x.x.xx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xx.x.x.xDxx`,
        // State @ t=3
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx
        xx.x.x.xDxx`,
    ]
    
    const startingElevator = 'B'
    const finalDestination = '3-3'
    const expectedOutput = 'BBA'

    expect(findElevatorPath(elevatorStates, startingElevator, finalDestination)).toBe(expectedOutput)
})

it('finds a route with an additional floor', () => {
    
    const elevatorStates = [
        // State @ t=1
        `xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xxAx.x.x.xx`,
        // State @ t=2
        `xx.x.x.x.xx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xx.x.x.xDxx`,
        // State @ t=3
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx
        xx.x.x.xDxx`,
        // State @ t=4
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.xBx.xDxx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.x.x.x.xx`,
        // State @ t=5
        `xx.x.xCx.xx
        xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx`,
        // State @ t=6
        `xx.x.xCxDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx`,
    ]
    
    const startingElevator = 'A'
    const finalDestination = '6-6'
    const expectedOutput = 'AABDDC'

    expect(findElevatorPath(elevatorStates, startingElevator, finalDestination)).toBe(expectedOutput)
})

it('finds a route ending on the 3rd floor', () => {
    
    const elevatorStates = [
        // State @ t=1
        `xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xxAx.x.x.xx`,
        // State @ t=2
        `xx.x.x.x.xx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.xBx.x.xx
        xx.x.xCx.xx
        xx.x.x.xDxx`,
        // State @ t=3
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx
        xx.x.x.xDxx`,
        // State @ t=4
        `xx.x.xCx.xx
        xx.x.x.x.xx
        xx.xBx.xDxx
        xx.x.x.x.xx
        xxAx.x.x.xx
        xx.x.x.x.xx`,
        // State @ t=5
        `xx.x.xCx.xx
        xx.x.x.xDxx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xxAxBx.x.xx
        xx.x.x.x.xx`,
        // State @ t=6
        `xx.x.x.x.xx
        xx.x.x.x.xx
        xx.x.x.x.xx
        xx.x.xCxDxx
        xxAxBx.x.xx
        xx.x.x.x.xx`,
    ]
    
    const startingElevator = 'A'
    const finalDestination = '3-6'
    const expectedOutput = 'AABDDC'

    expect(findElevatorPath(elevatorStates, startingElevator, finalDestination)).toBe(expectedOutput)
})