export default class Emoji {

  process(markdown) {
    return emojione.shortnameToImage(markdown);
  }
}
