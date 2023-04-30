import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from '../../assets/bp.png'
import whiteLogo from '../../assets/wp.png'

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if (
            (target.x === this.cell.x && target.y === this.cell.y + direction && this.cell.board.getCell(target.x, target.y).isEmpty())
            || (this.isFirstStep && target.x === this.cell.x && target.y === this.cell.y + firstStepDirection && this.cell.board.getCell(target.x, target.y - direction).isEmpty())
        ) {
            console.log(target.x, target.y)
            return true;
        }

        if (target.y === this.cell.y + direction
        && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}
