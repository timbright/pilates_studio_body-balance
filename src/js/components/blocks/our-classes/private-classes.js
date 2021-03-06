import AbstractComponent from '../../abstract-component';

const createPrivateClassesTemplate = () => {

    return (
        `<section class="private-classes">
      <h2 class="private-classes__block">Персональные классы</h2>
      <p class="private-classes__description text">
        Персональные тренировки в нашей студии проходят по индивидуальной программе с учетом физиологических особенностей каждого клиента.
        Одно из главных преимуществ персонального класса Пилатес является пристальное внимание тренера для одного человека, его тела и разума, с четкими и правильными рекомендациями и направлениями в выполнении движений в упражнениях.
        Благодаря индивидуальным классам Вы сможете лучше и быстрее понять и ощутить свое тело, научитесь двигаться, правильно используя свои мышцы. Тренер всегда напомнит Вам про правильное дыхание, выстроит вашу спину, расправит плечи и направит движения тела в нужную сторону. В нашем организме все очень взаимосвязанно, и тренировки строятся на работе тела в целом, и иногда сотни слов объяснений движения можно заменить прикосновение пальцев. Тренер полностью сопровождает ваши движения всю тренировку, и эта совместная работа позволит Вам быстрее и качественнее достигнуть желаемого результата. 
        В нашей студии индивидуальные классы проводятся на специальном оборудовании для Пилатес от ведущего американского производителя Balanced Body. Это Reformer, Cadillac, Ladder Barrel, Combo Chair. Подробнее о каждом оборудовании:</p>
        <ul class="private-classes__list">
            <li class="private-classes__item">
                <img class="private-classes__img-reformer" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h2 class="private-classes__title title">Reformer</h2>
                <p class="private-classes__text text">
                    Пожалуй, самый известный и самый популярный тренажер для Пилатес. Его полное название Universal Reformer, где название говорит само за себя. Он настолько уникален, что превращает любую тренировку в увлекательное приключение.
                    Благодаря движущейся платформе и сопротивлению пружин в тренировках на Reformer отсутствует ударная нагрузка, но при этом идет мощная проработка мышц, выравнивание тела и вытяжение позвоночника. Большой репертуар упражнений на Reformer никогда не сделает тренировки скучными и однообразными.
                </p>
            </li>
            <li class="private-classes__item">
                <img class="private-classes__img-cadillac" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h2 class="private-classes__title title">Cadillac</h2>
                <p class="private-classes__text text">
                    Еще один из «главных» тренажеров, заслуживающий особое внимание. Это «король» среди всего многообразия оборудования для Пилатес. Он самый большой, внушительный и вызывающий самые разные эмоции и реакции при первом знакомстве с ним.
                    Свое название он получил от известной марки автомобиля Cadillac именно за свои размеры, удобство и комфорт. Cadillac представляет собой кровать с неподвижной платформой и большой рамой, на которой со всех сторон крепятся системы пружин и перекладин. Все это позволяет создать невероятно огромный репертуар упражнений как для людей, которым требуется восстановительная терапия и реабилитация, так и для профессиональных спортсменов, для улучшения спортивных качеств. Также этот тренажёр идеально подходит как для новичков в фитнесе, так и для тех, кто хочет улучшить свои физические возможности.
                    Тренажер Cadillac как поможет выполнить упражнения, которые кажутся невозможными при первом взгляде, так и бросит вызов тем упражнениям, который уже являются простыми и обычными в вашей практике.
                    За тренировки на Cadillac ваше тело скажет Вам спасибо!
                </p>
            </li>
            <li class="private-classes__item">
                <img class="private-classes__img-ladder" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h2 class="private-classes__title title">Ladder Barrel</h2>
                <p class="private-classes__text text">
                    Или лестница с бочкой (дословный перевод). Представляет собой арку и лестницу)
                    Этот тренажер просто создан для артикуляции позвоночника. Это помощник для вашей спины. Создавая правильную и безопасную поддержку для позвоночника, на нем можно выполнять как простые, но, конечно же, эффективные упражнения, так и довольно сложные акробатические элементы, которые могут показаться невыполнимыми с первого взгляда. Как и все другое оборудование для Пилатес Ladder Barrel поможет творить вашему телу невероятные движения и укреплять Вас от макушки до кончиков пальцев ног.
                </p>
            </li>
            <li class="private-classes__item">
                <img class="private-classes__img-chair" src="assets/img/jpg/avatar_mocs.jpg" alt="photo trainer" width="200" height="200">
                <h2 class="private-classes__title title">Combo Chair</h2>
                <p class="private-classes__text text">
                    Комбинированный стул. Компактный и надежный тренажер, состоит из стабильного сиденья и подвижной педали. Педаль крепится к стулу с помощью пружин, которыми можно выстраивать различное сопротивление для упражнений. Тренировки на Combo Chair больше направлены на силу, баланс и выносливость. Несмотря на небольшой размер это тренажер удивит своим спектром возможностей и вариацией упражнений любой сложности на все группы мышц тела.
                </p>
            </li>
        </ul>
            <p class="private-classes__text text">
                Пилатес говорил, что все эти машины (оборудование), которые он использует, в конечном счете, служат тому, чтобы научить человека правильно выполнять упражнения без ничего. Целью его метода является здоровое сбалансированное тело, которое способно эффективно выполнять все необходимые ему в жизни действия, не испытывая при этом дискомфорт и излишнюю нагрузку, что обеспечивает человеку возможность вести здоровый образ жизни, сохраняя ум и дух в порядке.
            </p>
	</section>`
    );
};

export default class PrivateClasses extends AbstractComponent {
    constructor() {
        super();
    }
    getTemplate() { // возвращает разметку
        return createPrivateClassesTemplate();
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