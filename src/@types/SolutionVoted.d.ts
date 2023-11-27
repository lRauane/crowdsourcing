declare type SolutionVoted = {
  title?: string;
  description?: string;
  amountRequired?: number;
  votes?: number;
  voted?: boolean;
  onVoteClick?: () => void;
};