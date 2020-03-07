import AbstractComponent from '../../abstract-component';

const createMainListBlocksTemplate = () => {
  return (
    `<div class="main-blocks">
        <ul class="main-blocks__list">
            <li class="main-blocks__item main-blocks__item--first" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="297.12" height="300" viewBox="0 0 297.12 300">
                      <use xlink:href="assets/img/svg/sprite.svg#pilates-hundred"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Пилатес это</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">
                    Система эффективных упражнений для глубокой проработки мыщц.
                    Главная цель занятий Пилатес - сделать тело грациозным,
                     послушным и выносливым
                  </p>
                  <button class="main-blocks__hide-button first-button">О студии</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--second" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="357.3" height="300" viewBox="0 0 357.34 300">
                      <use xlink:href="assets/img/svg/sprite.svg#teaser"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Кому подходит Пилатес</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">
                  Этот метод настолько уникален и универсален, что подходит абсолютно 
                  всем, не зависимо от пола, возраста и физической подготовленности 
                  </p>
                  <button class="main-blocks__hide-button second-button">Классы</button>
              </div>
            </li>
            <li class="main-blocks__item main-blocks__item--third" onclick="">
              <div class="main-blocks__slide bounce">
                  <div class="main-blocks__slide-icon">
                    <svg width="340.45" height="300" viewBox="0 0 340.45 300">
                      <use xlink:href="assets/img/svg/sprite.svg#t-plank"></use>
                    </svg>
                  </div>
                  <h2 class="main-blocks__slide-head">Польза Пилатес</h2>
              </div>
              <div class="main-blocks__hide">
                  <p class="main-blocks__hide-text">
                    Тренировки Пилатес способствуют улучшению осанки и общего самочувствия, а так же качества движений и, как следствие, улучшению 
                    качества жизни.
                  </p>
                  <button class="main-blocks__hide-button third-button">Расписание</button>
              </div>
            </li>
        </ul>
    </div>`
  );
};

export default class MainListBlocks extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() { // возвращает разметку
    return createMainListBlocksTemplate();
  }

  _setClickHandler(path, handler) { // приватный метод
    this.getElement().querySelector(path)
      .addEventListener(`click`, handler);
  }

  setClickOnFirstButtonHandler(handler) { // public method realized click on first button of blocks
    this._setClickHandler(`.first-button`, handler);
  }
  setClickOnSecondButtonHandler(handler) { // public method realized click on second button of blocks
    this._setClickHandler(`.second-button`, handler);
  }
  setClickOnThirdButtonHandler(handler) { // public method realized click on third button of blocks
    this._setClickHandler(`.third-button`, handler);
  }
}