import PrivateClassesPageComponent from '../components/pages/page-classes/private-classes-page';
import PrivateClassesComponent from '../components/blocks/our-classes/private-classes';

import {
    render,
    RenderPosition,
    renderComponent
} from '../utils/render'

export default class PrivateClassesPageController {
    constructor(container) {
        this._container = container;
        this._privateClassesPageComponent = new PrivateClassesPageComponent();
        this._privateClassesComponent = new PrivateClassesComponent();
    }

    render() {
        render(this._container.getElement(), this._privateClassesPageComponent, RenderPosition.BEFOREEND);

        const privateClassesContainer = this._privateClassesPageComponent.getElement();
        render(privateClassesContainer, this._privateClassesComponent, RenderPosition.BEFOREEND);
    }
}