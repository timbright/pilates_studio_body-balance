import AbstractComponent from '../../abstract-component';

const createStudioPageTemplate = () => {
  return (
    `<section class="teachers-page container"></section>`
  );
};

export default class TeachersPage extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createStudioPageTemplate();
  }
}