export default interface BarProps {
    title: string;
    items: Array<{title: string, value: number, color?: string}>,
    display: 'horizontal'|'vertical',
}