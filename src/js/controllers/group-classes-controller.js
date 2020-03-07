import GroupClassesPageComponent from '../components/pages/page-classes/group-classes-page';
import GroupClassesComponent from '../components/blocks/our-classes/group-classes';

import {
    render,
    RenderPosition,
    renderComponent
} from '../utils/render'

export default class GroupClassesPageController {
    constructor(container) {
        this._container = container;
        this._groupClassesPageComponent = new GroupClassesPageComponent();
        this._groupClassesComponent = new GroupClassesComponent();
    }

    render() {
        render(this._container.getElement(), this._groupClassesPageComponent, RenderPosition.BEFOREEND);

        const groupClassesContainer = this._groupClassesPageComponent.getElement();
        render(groupClassesContainer, this._groupClassesComponent, RenderPosition.BEFOREEND);
    }
}