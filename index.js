function superbowlWin(record){
    const seasonResult = record.find(season => season.result === "W")
    return seasonResult ? seasonResult.year : undefined
}
