enum LeafAlign { Horizontal, Vertical }

enum PossibleAction { HorizontalLeaf, VerticalLeaf, RawData }

const HORIZONTAL_ALIGMENT = 'id="horizontal-align"';
const VERTICAL_ALIGNMENT = 'id="vertical-align"';

class CompositionLeaf {
    private alignment: LeafAlign;
    private leaf1: CompositionNode;
    private leaf2: CompositionNode;
}

class CompositionNode {
    private data: string | CompositionLeaf;

    insertRaw(data: string) {
        this.data = data;
    }
}

export class CompositionData {
    private GRID_START = '<div id="first-data-inside" style="display: grid">';
    private GRID_END = '</div>';
    private innerData: CompositionNode;

    private detectAction(htmlData: string): PossibleAction {
        if (htmlData.includes(HORIZONTAL_ALIGMENT)) {
            return PossibleAction.HorizontalLeaf;
        } else if (htmlData.includes(VERTICAL_ALIGNMENT)) {
            return PossibleAction.VerticalLeaf;
        }
        return PossibleAction.RawData;
    }

    generateRawData(rawData: string): void {
        this.innerData.insertRaw(rawData);
    }

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
        console.log(data);


    }
}
