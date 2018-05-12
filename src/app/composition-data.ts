const HORIZONTAL_ALIGMENT = 'id="horizontal-align"';
const VERTICAL_ALIGNMENT = 'id="vertical-align"';

export class CompositionData {
    private GRID_START = '<div id="first-data-inside" style="display: grid">';
    private GRID_END = '</div>';
    private innerData: string[];

    constructor(private htmlData: string) {
        let data: string[] = this.htmlData.split(/\s>|<\//);
        data = data.filter(d => d.length > 0 && !d.includes('id="first-data-inside"'));
        data.pop();
        data = data.map(d => {
            if (d.indexOf('<div') === 0) {
                d += '>';
            } else if (d === 'div') {
                d = '</div>';
            }
            return d;
        });
        this.innerData = data;
    }

    public getData(): string {
        return this.innerData.toString();
    }
}
