// --- АУДИО ---
const soundIntro = new Audio('intro.mp3');
const soundBg = new Audio('bg.mp3');
const soundCorrect = new Audio('correct.mp3');
const soundWrong = new Audio('wrong.mp3');
const soundOutro = new Audio('outro.mp3');

// Функция для остановки всех звуков, чтобы они не накладывались
function stopAllSounds() {
    soundIntro.pause(); soundIntro.currentTime = 0;
    soundBg.pause(); soundBg.currentTime = 0;
    soundCorrect.pause(); soundCorrect.currentTime = 0;
    soundWrong.pause(); soundWrong.currentTime = 0;
    soundOutro.pause(); soundOutro.currentTime = 0;
}

// База данных вопросов
const data = {
  "game_1": [
    {"question": "Сколько в комнате кошек, если в каждом из четырех углов сидит по кошке, а напротив каждой кошки сидит по кошке?", "options": ["12", "16", "4", "8"], "answer": "4"},
    {"question": "Крышка стола имеет четыре угла. Один из них отпилили. Сколько углов стало?", "options": ["4", "3", "5", "6"], "answer": "5"},
    {"question": "Сколько нужно сделать распилов, чтобы распилить бревно на 12 частей?", "options": ["11", "12", "10", "6"], "answer": "11"},
    {"question": "Каким числом является сумма натуральных чисел?", "options": ["Целым", "Натуральным", "Положительным", "Отрицательным"], "answer": "Натуральным"},
    {"question": "Под каким номером самая тонкая кисть для рисования?", "options": ["2", "0", "3", "1"], "answer": "1"},
    {"question": "Говорят, что математика — царица всех наук, а царица математики...", "options": ["Геометрия", "Арифметика", "Алгебра", "Тригонометрия"], "answer": "Арифметика"},
    {"question": "Сколько граней у незаточенного карандаша?", "options": ["5", "8", "6", "10"], "answer": "8"},
    {"question": "Равнобедренный треугольник, основание которого равно боковой стороне, является...", "options": ["Прямоугольным", "Равнобедренным", "Равносторонним", "Тупоугольным"], "answer": "Равносторонним"},
    {"question": "Из двух селений навстречу друг другу выехали два велосипедиста... Чему будет равно расстояние между ними через 2 ч после встречи?", "options": ["70 км", "20 км", "0 км", "35 км"], "answer": "70 км"},
    {"question": "Условный знак для обозначения чисел — это...", "options": ["Точка", "Тире", "Цифра", "Корень"], "answer": "Цифра"},
    {"question": "Кто сказал: «Математику уж затем учить надо, что она ум в порядок приводит»?", "options": ["Лобачевский", "Ломоносов", "Аристотель", "Декарт"], "answer": "Ломоносов"},
    {"question": "Единица длины... называлась...", "options": ["Фут", "Сажень", "Ярд", "Дюйм"], "answer": "Ярд"},
    {"question": "Который сейчас час, если оставшаяся часть суток вдвое больше прошедшей?", "options": ["8", "10", "12", "16"], "answer": "8"},
    {"question": "Прибор для измерения углов на местности называется...", "options": ["Транспортир", "Астролябия", "Линейка", "Экер"], "answer": "Астролябия"},
    {"question": "Этого ученого называли королем математики...", "options": ["Эйнштейн", "Лейбниц", "Гаусс", "Лагранж"], "answer": "Гаусс"}
  ],
  "game_2": [
    {"question": "Наименьшее натуральное число?", "options": ["2", "1", "0", "3"], "answer": "1"},
    {"question": "Как называется результат сложения?", "options": ["Разность", "Частное", "Сумма", "Произведение"], "answer": "Сумма"},
    {"question": "Какого действия нет в математике?", "options": ["Сложение", "Умножение", "Деление", "Отнимание"], "answer": "Отнимание"},
    {"question": "Как называется дробь, у которой числитель меньше знаменателя?", "options": ["Правильная", "Неправильная", "Обыкновенная", "Десятичная"], "answer": "Правильная"},
    {"question": "Сколько концов у трех с половиной палок?", "options": ["6", "8", "10", "7"], "answer": "8"},
    {"question": "Наука о решении уравнений называется…", "options": ["Математика", "Алгебра", "Геометрия", "Арифметика"], "answer": "Алгебра"},
    {"question": "Один насос... За сколько минут 5 таких насосов выкачают 5 т воды?", "options": ["5", "10", "1", "2"], "answer": "1"},
    {"question": "Какая цифра была введена в математику последней?", "options": ["5", "0", "9", "1"], "answer": "0"},
    {"question": "Каким числом является сумма целых чисел?", "options": ["Натуральным", "Рациональным", "Целым", "Действительным"], "answer": "Целым"},
    {"question": "Какую единицу длины в русский быт ввёл Пётр I?", "options": ["Миля", "Фут", "Верста", "Аршин"], "answer": "Фут"},
    {"question": "Сколько ударов делают в сутки эти часы?", "options": ["180", "150", "200", "100"], "answer": "180"},
    {"question": "Кто это сказал: «Математика приводит в порядок...»?", "options": ["Галилей", "Декарт", "Фабр", "Бернулли"], "answer": "Фабр"},
    {"question": "Как называются числа, записанные одними единицами?", "options": ["Нечетные", "Простые", "Составные", "Эквивалентные"], "answer": "Эквивалентные"},
    {"question": "Кто автор книги «Начала»?", "options": ["Пифагор", "Евклид", "Лобачевский", "Ломоносов"], "answer": "Евклид"},
    {"question": "Единица измерения объема нефти?", "options": ["Унция", "Тонна", "Баррель", "Карат"], "answer": "Баррель"}
  ],
  "game_3": [
    {"question": "Очень плохая оценка знаний.", "options": ["2", "1", "3", "5"], "answer": "1"},
    {"question": "Какая величина лишняя?", "options": ["КГ", "Грамм", "КМ", "Тонна"], "answer": "КМ"},
    {"question": "Наука о числах, их свойствах и действиях над ними?", "options": ["Математика", "Арифметика", "Алгебра", "Геометрия"], "answer": "Арифметика"},
    {"question": "Какое число делится без остатка на любое целое число, отличное от нуля?", "options": ["0", "1", "5", "100"], "answer": "0"},
    {"question": "Многоугольник с наименьшим числом сторон называется…", "options": ["Квадрат", "Треугольник", "Прямоугольник", "Ромб"], "answer": "Треугольник"},
    {"question": "Три курицы за два дня несут 3 яйца. Сколько яиц снесут 6 куриц за 6 дней?", "options": ["18", "6", "12", "9"], "answer": "6"},
    {"question": "Сколько времени потребуется, чтобы отбить 12 ударов?", "options": ["10 с", "11 с", "12 с", "13 с"], "answer": "11 с"},
    {"question": "Сколько лет просидел на печи Илья Муромец?", "options": ["10 лет", "23 года", "33 года", "35 лет"], "answer": "33 года"},
    {"question": "Кто из математиков был чемпионом олимпийских игр по кулачному бою?", "options": ["Пифагор", "Лобачевский", "Гаусс", "Лейбниц"], "answer": "Пифагор"},
    {"question": "Кто ввёл прямоугольную систему координат?", "options": ["Ломоносов", "Эратосфен", "Декарт", "Пифагор"], "answer": "Декарт"},
    {"question": "Сколько пьес во «Времена года» П. И. Чайковского?", "options": ["10", "11", "13", "12"], "answer": "12"},
    {"question": "Во сколько раз увеличилось число?", "options": ["В 10 раз", "В 11 раз", "В 12 раз", "В 13 раз"], "answer": "В 11 раз"},
    {"question": "Что такое абак?", "options": ["Линейка", "Счеты", "Разряд", "Прибор для измерения углов"], "answer": "Счеты"},
    {"question": "Единица измерения скорости на море?", "options": ["Км/ч", "Узел", "Фунт", "Ярд"], "answer": "Узел"},
    {"question": "Кто это сказал: «Математикой нужно заниматься...»?", "options": ["Галилей", "Гильберт", "Платон", "Лагранж"], "answer": "Платон"}
  ]
};

// Глобальные переменные игры
const gamesArray = [data.game_1, data.game_2, data.game_3];
let currentGameIndex = 0;
let currentQuestionIndex = 0;
let currentQuestionObj = null;

let is5050Used = false;
let isPhoneUsed = false;
let phoneInterval;
let isAudienceUsed = false;

// Элементы DOM
const questionEl = document.getElementById("question-text");
const answersEls = document.querySelectorAll(".answer");
const moneyScaleEls = document.querySelectorAll("#money-scale li");
const btn5050 = document.getElementById("btn-5050");
const btnPhone = document.getElementById("btn-phone");
const clockOverlay = document.getElementById("clock-overlay");
const timerEl = document.getElementById("timer");
const skipTimerBtn = document.getElementById("skip-timer");

const btnAudience = document.getElementById("btn-audience");
const audienceOverlay = document.getElementById("audience-overlay");
const closeAudienceBtn = document.getElementById("close-audience");

// Запуск игры по кнопке (для активации звука)
document.getElementById("start-game-btn").onclick = () => {
    document.getElementById("start-screen").style.display = "none";
    
    // Включаем интро
    stopAllSounds();
    soundIntro.play();
    
    // Ждем 3 секунды, пока играет интро, и начинаем
    setTimeout(() => {
        alert("Начинаем игру №1!");
        startNewCycle();
    }, 3000); 
};

function startNewCycle() {
    currentGameIndex = 0;
    startNextGame();
}

function startNextGame() {
    currentQuestionIndex = 0;
    is5050Used = false;
    isPhoneUsed = false;
    isAudienceUsed = false;
    
    // Сброс визуального состояния подсказок
    btn5050.style.opacity = "1";
    btn5050.style.cursor = "pointer";
    btnPhone.style.opacity = "1";
    btnPhone.style.cursor = "pointer";
    btnAudience.style.opacity = "1";
    btnAudience.style.cursor = "pointer";

    loadQuestion();
}

function loadQuestion() {
    currentQuestionObj = gamesArray[currentGameIndex][currentQuestionIndex];
    
    // Обновляем шкалу денег
    updateMoneyScale();

    // Запускаем фоновую музыку
    stopAllSounds();
    soundBg.play();

    // Загружаем вопрос
    questionEl.textContent = currentQuestionObj.question;

    // Загружаем ответы
    answersEls.forEach((ansEl, index) => {
        ansEl.classList.remove("correct", "wrong");
        ansEl.style.visibility = "visible";
        ansEl.style.pointerEvents = "auto";
        
        const textSpan = ansEl.querySelector(".ans-text");
        textSpan.textContent = currentQuestionObj.options[index];

        ansEl.onclick = () => checkAnswer(ansEl, currentQuestionObj.options[index]);
    });
}

function updateMoneyScale() {
    moneyScaleEls.forEach(el => el.classList.remove("active"));
    const activeIndex = 14 - currentQuestionIndex; 
    moneyScaleEls[activeIndex].classList.add("active");
}

function checkAnswer(clickedEl, selectedText) {
    // Блокируем клики по остальным ответам
    answersEls.forEach(el => el.style.pointerEvents = "none");
    
    // Выключаем фоновую музыку перед проверкой
    stopAllSounds();

    const isCorrect = (selectedText === currentQuestionObj.answer);

    if (isCorrect) {
        clickedEl.classList.add("correct");
        soundCorrect.play(); // Звук верного ответа
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex > 14) {
                stopAllSounds();
                soundOutro.play();
                alert(`Поздравляем! Вы выиграли МИЛЛИОН в игре!`);
                advanceGameSequence();
            } else {
                loadQuestion();
            }
        }, 3000); // 3 секунды на звук
    } else {
        clickedEl.classList.add("wrong");
        soundWrong.play(); // Звук неверного ответа
        
        answersEls.forEach(el => {
            if (el.querySelector(".ans-text").textContent === currentQuestionObj.answer) {
                el.classList.add("correct");
            }
        });

        setTimeout(() => {
            stopAllSounds();
            soundOutro.play(); // Музыка финала
            alert(`Увы, это неправильный ответ. Игра окончена.\nВаш несгораемый выигрыш: ${getSafeAmount()}`);
            advanceGameSequence();
        }, 4000); // 4 секунды
    }
}

function getSafeAmount() {
    if (currentQuestionIndex >= 10) return "32 000";
    if (currentQuestionIndex >= 5) return "1 000";
    return "0";
}

function advanceGameSequence() {
    currentGameIndex++;
    if (currentGameIndex >= 3) {
        startNewCycle();
    } else {
        alert(`Начинаем игру №${currentGameIndex + 1}!`);
        startNextGame();
    }
}

// ---- ЛОГИКА ПОДСКАЗОК ----

// 50:50
btn5050.onclick = () => {
    if (is5050Used) return;
    is5050Used = true;
    
    btn5050.style.opacity = "0.3";
    btn5050.style.cursor = "not-allowed";

    let wrongIndices = [];
    currentQuestionObj.options.forEach((opt, idx) => {
        if (opt !== currentQuestionObj.answer) {
            wrongIndices.push(idx);
        }
    });

    wrongIndices.sort(() => Math.random() - 0.5);
    
    answersEls[wrongIndices[0]].style.visibility = "hidden";
    answersEls[wrongIndices[0]].style.pointerEvents = "none";
    
    answersEls[wrongIndices[1]].style.visibility = "hidden";
    answersEls[wrongIndices[1]].style.pointerEvents = "none";
};

// Звонок другу (таймер)
btnPhone.onclick = () => {
    if (isPhoneUsed) return;
    isPhoneUsed = true;

    btnPhone.style.opacity = "0.3";
    btnPhone.style.cursor = "not-allowed";

    clockOverlay.style.display = "flex";
    
    let timeLeft = 60;
    timerEl.textContent = timeLeft;

    phoneInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            closeTimer();
        }
    }, 1000);
};

skipTimerBtn.onclick = () => {
    closeTimer();
};

function closeTimer() {
    clearInterval(phoneInterval);
    clockOverlay.style.display = "none";
}

// Помощь зала
btnAudience.onclick = () => {
    if (isAudienceUsed) return;
    isAudienceUsed = true;

    btnAudience.style.opacity = "0.3";
    btnAudience.style.cursor = "not-allowed";

    let visibleIndices = [];
    let correctIdx = -1;
    
    answersEls.forEach((el, idx) => {
        if (el.style.visibility !== "hidden") {
            visibleIndices.push(idx);
        }
        if (currentQuestionObj.options[idx] === currentQuestionObj.answer) {
            correctIdx = idx;
        }
    });

    let points = [0, 0, 0, 0];
    
    visibleIndices.forEach(idx => {
        points[idx] = Math.random() * 40 + 10;
    });
    
    points[correctIdx] += 40 + Math.random() * 30; 

    let totalPoints = points.reduce((a, b) => a + b, 0);
    let percentages = points.map(p => Math.round((p / totalPoints) * 100));

    let diff = 100 - percentages.reduce((a, b) => a + b, 0);
    percentages[correctIdx] += diff;

    for (let i = 0; i < 4; i++) {
        const bar = document.getElementById(`bar-${i}`);
        const percLabel = document.getElementById(`perc-${i}`);
        
        if (visibleIndices.includes(i)) {
            bar.style.height = '0%'; 
            setTimeout(() => {
                bar.style.height = `${percentages[i]}%`;
            }, 100);
            percLabel.textContent = `${percentages[i]}%`;
        } else {
            bar.style.height = `0%`;
            percLabel.textContent = `0%`;
        }
    }

    audienceOverlay.style.display = "flex";
};

closeAudienceBtn.onclick = () => {
    audienceOverlay.style.display = "none";
};