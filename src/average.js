/*
 * Retourner la moyenne des valeurs du tableau
 * ex: [4, 8] => 6 car (4+8)/2
 * ex: [6, 8, 10] => 8 car (6+8+10)/3
 */
function average(scores) {
    // CODE HERE
    var i = 0, summ = 0, ArrayLen = scores.length;
    while (i < ArrayLen) {
        summ = summ + scores[i++];
}
    return summ / ArrayLen;
}

export { average };