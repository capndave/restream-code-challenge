/**
 * findElevatorPath
 * @param {array} elevatorStates 
 * @param {char} startingElevator
 * @param {string} finalDestination
 * @returns {string} string representation of each elevator position at point n
 * 
 * IF I HAD MORE TIME: I would have checked for more than one intersecting elevator at a time.
 * This implementation presumes that there can only be a maximum of two elevators
 * on one floor at one time.
 */
module.exports = function findElevatorPath(elevatorStates, startingElevator, finalDestination) {
    const TARGET_FLOOR = finalDestination.charAt(0) - 1
    const TARGET_TIME = finalDestination.charAt(2) - 1
    let path = []

    for (let i = 0; i <= TARGET_TIME; i++) {

        if (i === 0) {

            path.push(startingElevator)

        } else {

            /**
             * Split state into an array of floors
             * reversed to represent stories of bldg
             */
            const floors = elevatorStates[i]
                .split('\n')
                .reverse()
            
            const currentElevator = path[i-1]

            /* Stay in the elevator if no intersecting elevator found */
            let nextElevator = currentElevator

            /**
             * Check all floors to see if current elevator
             * and another elevator are on a floor
             * update nextElevator and finalFloor if so
             */
            for (let j=0; j < floors.length; j++) {

                /* Get array of elevator letters */
                const elevators = floors[j]
                    .replace(/[x. ]/g, '')
                    .split('')

                /* Get the letter of the intersecting elevator */
                const intersectingElevator = elevators
                    .filter(elevator => elevator !== currentElevator)[0]

                /* Update nextElevator if conditions met */
                if (
                    elevators.includes(currentElevator) && 
                    Boolean(intersectingElevator)
                ) {
                    nextElevator = intersectingElevator
                }
                
            }

            /* Add letter for this iteration to path arr */
            path.push(nextElevator)
            
            /**
             * If elevator on the correct floor
             * and arrived on time, return path string 
             */
            const regex = new RegExp(nextElevator, 'g')
            const elevatorOnCorrectFloor = regex.test(floors[TARGET_FLOOR])
            const arrivedOnTime = (i === TARGET_TIME)

            if (
                arrivedOnTime &&
                elevatorOnCorrectFloor
            ) {
                return path.join('')
            }
        }
    }

    /**
     * Default return value
     */
    return 'NO SUCCESSFUL ROUTE'

}