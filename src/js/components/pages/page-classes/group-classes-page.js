import AbstractComponent from '../../abstract-component';

const createGroupClassesPageTemplate = () => {
  return (
    `<section class="group-classes-page container">
      <h1 class="group-classes__head head visually-hidden">Групповые классы</h1>
    </section>`
  );
};

export default class GroupClasses extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createGroupClassesPageTemplate();
  }
}