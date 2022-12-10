export default function capitalize(text) {
    let words = text.replaceAll("-", " ").split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.substring(1)
    }
    return words.join(" ");
}