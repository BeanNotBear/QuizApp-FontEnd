export class QuizViewModel {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  duration: number;
  image: string;
  numberOfQuestions: number;

  constructor(
    id: string,
    title: string,
    description: string,
    isActive: boolean,
    duration: number,
    image: string,
    numberOfQuestions: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isActive = isActive;
    this.duration = duration;
    this.image = image;
    this.numberOfQuestions = numberOfQuestions;
  }
}
