import ProgressBarProps from "./ProgressBarProps";
import SingleBarProps from "./SingleBarProps";

export default interface QuestionScoreProps {
    questionName: string;
    averageScore : number;
    comparisonOrg : ProgressBarProps;
    comparedLastPeriod: 'higher'| 'equal' | 'lower';
    stars: Array<SingleBarProps>
  }
  