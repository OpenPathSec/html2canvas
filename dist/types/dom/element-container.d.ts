import { CSSParsedDeclaration } from '../css/index';
import { TextContainer } from './text-container';
import { Bounds } from '../css/layout/bounds';
import { Context } from '../core/context';
export declare const enum FLAGS {
    CREATES_STACKING_CONTEXT = 2,
    CREATES_REAL_STACKING_CONTEXT = 4,
    IS_LIST_OWNER = 8
}
export declare class ElementContainer {
    protected readonly context: Context;
    readonly styles: CSSParsedDeclaration;
    readonly textNodes: TextContainer[];
    readonly elements: ElementContainer[];
    bounds: Bounds;
    flags: number;
    constructor(context: Context, element: Element);
}
