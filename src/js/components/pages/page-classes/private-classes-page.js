import AbstractComponent from '../../abstract-component';

const createPrivateClassesPageTemplate = () => {
  return (
    `<section class="private-classes-page container">
      <h1 class="private-classes__head head visually-hidden">Групповые классы</h1>
    </section>`
  );
};

export default class PrivateClasses extends AbstractComponent {
  getTemplate() { // возвращает разметку
    return createPrivateClassesPageTemplate();
  }
}