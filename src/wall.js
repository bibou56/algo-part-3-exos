/*
 * Cette fonction doit ajouter un nouveau message à la liste des messages existants
 *
 *
 * Voir le fichier de tests associé (spec/wallSpec.js)
 */
function wall(existingMessages, newMessage) {
    let messages = existingMessages;
    messages.push (newMessage);

    return messages;
    // CODE HERE
}

export { wall };