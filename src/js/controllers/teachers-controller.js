import TeachersPageComponent from '../components/pages/page-teachers/page-teachers';
import OurTeachersComponent from '../components/blocks/our-teachers/our-teachers';

import {
    render,
    RenderPosition,
    renderComponent
} from '../utils/render'

export default class TeachersPageController {
    constructor(container) {
        this._container = container;
        this._teachersPageComponent = new TeachersPageComponent();
        this._ourTeachersComponent = new OurTeachersComponent();
    }

    render() {
        render(this._container.getElement(), this._teachersPageComponent, RenderPosition.BEFOREEND);

        const teachersContainer = this._teachersPageComponent.getElement();
        render(teachersContainer, this._ourTeachersComponent, RenderPosition.BEFOREEND);
    }
}