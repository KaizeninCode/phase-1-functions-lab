// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let distanceBlocks = blocks - 42
    if (distanceBlocks < 0) {
        return 42 - blocks
    } 
    return distanceBlocks
}
function distanceFromHqInFeet(blocks) {
    let distanceBlocks = distanceFromHqInBlocks(blocks)
    if (distanceBlocks < 0) {
        return 42 - blocks
    }
    return distanceBlocks * 264
}
function distanceTravelledInFeet(start, destination) {
    let travelDistance = destination - start
    if (travelDistance < 0) {
        travelDistance = start - destination
    }
    return travelDistance * 264
}

function calculatesFarePrice(start, destination) {
    let totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance < 400) {
        return 0
    } else if (totalDistance > 400 && totalDistance < 2000) {
        return (totalDistance - 400) * 0.02
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        return 25
    } else if (totalDistance > 2500) {
        return 'cannot travel that far'
    }
}