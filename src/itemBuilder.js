import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: { min: 10, max: 30 }
});

const text = lorem.generateWords();

export const logLorem = () => {
  console.log(text);
}