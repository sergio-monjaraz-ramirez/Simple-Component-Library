export default interface PieProps {
    data: { title: string; value: number; color: string }[];
    title?: string;
    showLegends?: boolean;
  }