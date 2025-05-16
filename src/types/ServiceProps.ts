type QuestionServiceProps = {
  questionId?: string,
  direction: "higher" | "lower" | "equal",
  color: string,
}

export default interface ServiceProps {
  serviceName: string;
  parentName: string;
  thisPeriod: {
    responses: { numReview: number; responseRate: number | string},
    averageScore: string
  };
  last6Months: {
    averageScore: string
  };
  questions: Array<QuestionServiceProps>;

}
