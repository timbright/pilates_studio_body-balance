import AbstractComponent from '../../abstract-component';

const createGroupClassesTemplate = () => {

  return (
    `<section class="group-classes">
      <h2 class="group-classes__block">Групповые классы, пакет BASIC (до 8 человек в классе)</h2>
      <p class="group-classes__duration">* Длительность группового класса 55 минут</p>
        <ul class="group-classes__list">
            <li class="group-classes__item">
                <h2 class="group-classes__title title">Pilates START</h2>
                <p class="group-classes__text text">
                  Этот урок - знакомство с методом Пилатес, изучение базовых упражнений и основ техники выполнения.
                  Данный урок проходит на матах (ковриках). Большую часть времени занятие проходит в положении лежа и выполнения упражнений направлены на преодоление силы тяжести. 
                  На этом уроке Вы научитесь очень важным моментам в тренировке Пилатес, а именно, его основным принципам, что позволит Вам совершенствоваться в дальнейшем на занятиях и улучшать свое физическое и духовное (ментальное) состояние.  
                  Также особое внимание уделяется обучению правильному дыханию, скоординированному с движениями тела.
                  Здесь Вы научитесь чувствовать свое тело как никогда раньше и создавать новые правильные паттерны движений.
                </p>
            </li>
            <li class="group-classes__item">
              <h2 class="group-classes__title title">Pilates PROPS</h2>
              <p class="group-classes__text text">
                На этом уроке к классическим упражнениям по методу Пилатес добавляется малое оборудование, такое как: пилатес-мяч (Soft Ball), пилатес-кольцо (Pilates Circle), пилатес-ролл (Foam Roller), ленточный амортизатор (Theraband).
                Малое оборудование как помогает в выполнении упражнений, так и создает дополнительную нагрузку в уже привычных движениях. Благодаря вовлечению в урок пропсов (малого оборудования), урок получается еще более интересным и разнообразным. Вы получите больше инструментов и возможностей для улучшения выполнения упражнений, для улучшения качества движений тела и для улучшения проприорицепции (ощущение своего тела) Вашего тела.
                Данный урок рекомендуем к посещению после класса Pilates START.
              </p>
            </li>
            <li class="group-classes__item">
                <h2 class="group-classes__title title">Stretching</h2>
                <p class="group-classes__text text">
                  Этот урок направлен на гармоничное развитие гибкости тела и улучшение мобильности суставов. 
                  На данном классе упражнения выполняются как на растяжение мышц, так и на их укрепление. Большое внимание уделяется улучшению подвижности суставов, вытяжению поясницы и раскрытию грудного отдела. Все упражнения подобраны для сбалансированного растяжения мышц тела по передней, задней и боковых линиях тела. Упражнения сочетают в себе динамичный и статичный вид растяжки с правильным дыханием и с полным контролем и осознанием самого движения и конечной фазой - расслабления.
                  Этот урок НЕ про шпагат!
                </p>
            </li>
            <li class="group-classes__item">
               <h2 class="group-classes__title title">Spine Relax</h2>
               <p class="group-classes__text text">
                  Авторский урок от нашего мастер-тренера Дианы. 
                  Этот урок основан на богатейшем опыте и собрал в 
                  себя самые эффективные техники из направления Body&Mind. 
                  Комплекс упражнений направлен на снятие напряжения мышц спины и шеи,
                  а также улучшение подвижности всех отделов позвоночника и улучшение его 
                  артикуляции. Все движения этого класса выполняются в очень медленном и спокойном 
                  темпе с использованием техники медленного и глубокого дыхания. Этот класс 
                  рекомендован абсолютно всем, но особенно будет полезен людям, испытывающим
                  неприятные или болевые ощущения в области шеи и (или) спины. 
               </p>
            </li>
        </ul>
        <h2 class="group-classes__block">Групповые классы, пакет SPECIAL (до 5 человек в классе)</h2>
        <ul class="group-classes__list">
          <li class="group-classes__item">
            <h2 class="group-classes__title title">MOTR</h2>
              <p class="group-classes__text text">
                «MOre Than Roller» - это уникальный и инновационный тренажер, сочетающий в себе комфортный пилатес-ролл и амортизаторы с тремя уровнями сопротивления, который позволит Вам тренироваться в восьми различных положениях тела с быстрым переключением сопротивления. К тросам (амортизаторам) тренажера крепятся петли, что дает возможность полноценно проработать мышцы рук и ног, живота и спины с различной нагрузкой.
                MOTR - замечательная возможность сочетать функциональный тренинг и метод Пилатес. Упражнения с MOTR включают такие категории, как кардио и баланс, функциональный и силовой тренинг, разум и тело, ловкость и растяжку и многое другое.
                Класс MOTR - это отличная групповая тренировка, на которой Вы ощутите новые грани своих возможностей.
              </p>
          </li>
          <li class="group-classes__item">
            <h2 class="group-classes__title title">ARC Pilates</h2>
            <p class="group-classes__text text">
              Класс с использованием легкого, изящного и очень функционального оборудования - Пилатес-Арки (Pilates Arc).
              Тренировка, в первую очередь, направлена на восстановление осанки и улучшение артикуляции позвоночника. Выполняя упражнения, пилатес-арка будет поддерживать Вашу спину в комфортном положении на протяжении всего урока. В каком бы положении не выполнялось упражнение (лежа на спине, боку, животе и сидя), оно будет анатомически правильным и корректным для позвоночника.
              Благодаря своей форме, плавной кривой на одной стороне и более крутой на другой стороне, пилатес-арка универсальна для различных упражнений и различных типов осанки. Тренировка  на Арке позволяет восстановить подвижность грудного отдела позвоночника, сняв излишнюю нагрузку и напряжение с шеи и поясницы.
              Благодаря своим изгибам Арка создает естественную поддержку для спины, делая упражнения максимально эффективными, помогает обучить тело находить и удерживать правильное положение, а также поможет справиться со сложными упражнениями более легко. 
            </p>
          </li>
        </ul>
	</section>`
  );
};

export default class GroupClasses extends AbstractComponent {
  constructor() {
    super();
  }
  getTemplate() { // возвращает разметку
    return createGroupClassesTemplate();
  }

  //   _setClickHandler(path, handler) { // приватный метод вынести в utils
  // 	this.getElement().querySelector(path)
  // 	.addEventListener(`click`, handler);
  //   }

  //   setSubmitHandler(handler) { // устанавливает слушатель на отправку формы
  //     this.getElement().querySelector(`#form`)
  //       .addEventListener(`submit`, handler);
  //   }

  //   setClickOnButtonCloselHandler(handler) { // public method realized click on popup-controller
  // 	this._setClickHandler(`.mail-form__close-btn`, handler);
  //   }
}