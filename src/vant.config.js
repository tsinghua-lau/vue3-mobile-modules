import { Button, List, Cell, CellGroup,Popup } from 'vant';

export function vant(app) {
    app.use(Button);
    app.use(List)
    app.use(Cell);
    app.use(CellGroup);
    app.use(Popup);
}

