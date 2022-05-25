//i love you- codewars 8 kyu
//determine response based on number of petals on a flower.
function howMuchILoveYou(nbPetals) {
    const responses =[
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ]
    return responses[(nbPetals -1) % 6] //minus 1 to account for the way arrays are indexed
}
