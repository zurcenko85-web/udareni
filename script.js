// ==================== ОСНОВНЫЕ ПЕРЕМЕННЫЕ ====================

// Словарь с категориями (убрана категория "разное")
const wordCategories = {
    'существительные': ['аэропорты', 'банты', 'бороду', 'бухгалтеров', 'вероисповедание', 
                       'водопровод', 'газопровод', 'дешевизна', 'диспансер', 'жалюзи',
                       'значимость', 'иксы', 'каталог', 'квартал', 'конусов', 'краны',
                       'кремень', 'кремня', 'лекторов', 'местностей', 'недуг', 'некролог',
                       'нефтепровод', 'новостей', 'ногтя', 'отзыв', 'отрочество', 'поручни',
                       'приданое', 'свёкла', 'сироты', 'сосредоточение', 'средства', 'столяр',
                       'торты', 'туфля', 'цемент', 'центнер', 'цепочка', 'шарфы', 'эксперт',
                       'гражданство', 'дефис', 'договоренность', 'документ', 'досуг', 'еретик',
                       'корысть', 'локтя', 'локтей', 'лыжня', 'намерение', 'нарост', 'недруг',
                       'ненависть', 'партер', 'портфель', 'призыв', 'созыв', 'статуя', 'таможня',
                       'шофер'],
    
    'прилагательные': ['значимый', 'красивый', 'красивейший', 'кухонный', 'мозаичный', 
                      'оптовый', 'прозорливый', 'сливовый', 'загнутый', 'занятый', 
                      'запертый', 'кормящий', 'кровоточащий', 'согнутый'],
    
    'наречия': ['верна', 'ловка', 'прозорлива', 'важна', 'занята', 'принята', 'вовремя',
               'доверху', 'донельзя', 'донизу', 'досуха', 'засветло', 'затемно', 'надолго',
               'ненадолго', 'снята', 'красивее'],
    
    'сравнительные': ['красивее'],
    
    'деепричастия': ['закупорив', 'начав', 'начавшись', 'отдав', 'подняв', 'поняв', 'прибыв', 'создав'],
    
    'глаголы': ['брала', 'бралась', 'взяла', 'взялась', 'влилась', 'ворвалась', 'восприняла',
               'воссоздала', 'вручит', 'гнала', 'гналась', 'добрала', 'добралась', 'дождалась',
               'дозвонится', 'дозировать', 'ждала', 'жилось', 'закупорить', 'занял', 'заняла',
               'заперла', 'запломбировать', 'защемит', 'звала', 'звонит', 'кашлянуть', 'клала',
               'клеить', 'кралась', 'кровоточить', 'лгала', 'лила', 'лилась', 'наврала', 'наделит',
               'надорвалась', 'назвалась', 'накренится', 'налила', 'нарвала', 'начал', 'начала',
               'обзвонит', 'облегчит', 'облилась', 'обнялась', 'обогнала', 'ободрала', 'ободрит',
               'ободрится', 'обострить', 'одолжит', 'озлобить', 'осведомиться', 'отбыла', 'отдала',
               'откупорить', 'отозвала', 'отозвалась', 'перезвонит', 'перелила', 'плодоносить',
               'пломбировать', 'повторит', 'позвала', 'позвонит', 'полила', 'положил', 'поняла',
               'послала', 'прибыл', 'принудить', 'принял', 'рвала', 'сверлит', 'сняла', 'соврала', 'создала',
               'сорвала', 'сорит', 'убрала', 'углубить', 'укрепит', 'черпать', 'щелкать', 'щемит'],
    
    'причастия': ['довезенный', 'загнутый', 'занятый', 'запертый', 'заселенный', 'кормящий',
                 'кровоточащий', 'наживший', 'наливший', 'нанявшийся', 'начавший', 'начатый',
                 'низведенный', 'облегченный', 'ободренный', 'обострённый', 'отключенный',
                 'повторённый', 'поделенный', 'понявший', 'принятый', 'прирученный', 'проживший',
                 'согнутый', 'углубленный']
};

// Словарь с примерами - С ПРАВИЛЬНЫМИ УДАРЕНИЯМИ
const stressExamples = {
    'аэропорты': { example: 'Надевайте ваши шорты,\nВсе бегом в аэропОрты!', correct: 'аэропОрты', category: 'существительные' },
    'банты': { example: 'А студенты-практиканты\nПросто обожают бАнты', correct: 'бАнты', category: 'существительные' },
    'бороду': { example: 'Мы идем по городу,\nПочёсывая бОроду.', correct: 'бОроду', category: 'существительные' },
    'бухгалтеров': { example: 'Все черты характеров\nНа лицах у бухгАлтеров', correct: 'бухгАлтеров', category: 'существительные' },
    'вероисповедание': { example: 'Ведаю не ведаю,\nЧто вероисповЕдую', correct: 'вероисповЕдание', category: 'существительные' },
    'водопровод': { example: 'Знай русский народ,\nКак течет водопровОд', correct: 'водопровОд', category: 'существительные' },
    'газопровод': { example: 'Знай русский народ,\nКак течет газопровОд', correct: 'газопровОд', category: 'существительные' },
    'дешевизна': { example: 'Мне милей моя Отчизна,\nЗдесь такая дешевИзна', correct: 'дешевИзна', category: 'существительные' },
    'диспансер': { example: 'И сказал мне акушер,\nТы иди-ка в диспансЕр', correct: 'диспансЕр', category: 'существительные' },
    'жалюзи': { example: 'Поскорее привези,\nНам для окон жалюзИ', correct: 'жалюзИ', category: 'существительные' },
    'значимость': { example: 'Простите мою обманчивость,\nОна скрывает вашу знАчимость.', correct: 'знАчимость', category: 'существительные' },
    'значимый': { example: 'Простите мою обманчивость,\nОна скрывает вашу знАчимость.', correct: 'знАчимый', category: 'прилагательные' },
    'иксы': { example: 'Легко им делать кнИксен, ведь ноги словно Иксы', correct: 'Иксы', category: 'существительные' },
    'каталог': { example: 'Сделать выбор мне помог,\nЭтот новый каталОг', correct: 'каталОг', category: 'существительные' },
    'квартал': { example: 'Рассказал телеканал,\nКак построили квартАл', correct: 'квартАл', category: 'существительные' },
    'конусов': { example: 'Начертили конус -\nПолучили бонус', correct: 'кОнусов', category: 'существительные' },
    'краны': { example: 'На рынке шарлатаны\nПродавали крАны', correct: 'крАны', category: 'существительные' },
    'красивее': { example: 'Чем кошка игри́вее, тем она красИвее.', correct: 'красИвее', category: 'сравнительные' },
    'красивый': { example: 'Он был красив, но не красИвый, красивее и красивейший - нужно запомнить.', correct: 'красИвый', category: 'прилагательные' },
    'красивейший': { example: 'Сегодня я счастли́вейший – купил костюм красИвейший.', correct: 'красИвейший', category: 'прилагательные' },
    'кремень': { example: 'Будь как кремЕнь -\nЗатяни ремень', correct: 'кремЕнь', category: 'существительные' },
    'кремня': { example: 'Мне для яркого огня,\nНужно искру от кремнЯ', correct: 'кремнЯ', category: 'существительные' },
    'кухонный': { example: 'Стол нами купленный и в кухню занесенный, - зовётся кУхонный, а вовсе не кухонный.', correct: 'кУхонный', category: 'прилагательные' },
    'лекторов': { example: 'Немало было лЕкторов,\nПод лампами прожекторов', correct: 'лЕкторов', category: 'существительные' },
    'ловка': { example: 'Грациозна и легка́, Красива, статна и ловкА.', correct: 'ловкА', category: 'наречия' },
    'местностей': { example: 'Не встретишь лучше мЕстностей\nВокруг наших окрестностей', correct: 'мЕстностей', category: 'существительные' },
    'мозаичный': { example: 'Очень необы́чный, орнамент мозаИчный.', correct: 'мозаИчный', category: 'прилагательные' },
    'недуг': { example: 'Ты нам не друг,\nПрощай недУг', correct: 'недУг', category: 'существительные' },
    'некролог': { example: 'Не покажет некролОг,\nЕго скорбный диалог', correct: 'некролОг', category: 'существительные' },
    'нефтепровод': { example: 'Будем двигаться в обход\nВпереди нефтепровОд', correct: 'нефтепровОд', category: 'существительные' },
    'новостей': { example: 'Не отпустим мы гостей\nБез хороших новостЕй', correct: 'новостЕй', category: 'существительные' },
    'ногтя': { example: 'Хотела лишь покраску нОгтя,\nА получила тигра когти', correct: 'нОгтя', category: 'существительные' },
    'оптовый': { example: 'Принять товар гото́вый, ждет новый склад оптОвый.', correct: 'оптОвый', category: 'прилагательные' },
    'отзыв': { example: 'Был депутат и вот не стало,\nотзЫв лишь слово прозвучало', correct: 'отзЫв', category: 'существительные' },
    'отрочество': { example: 'Наступает как известно,\nОтрочество после детства', correct: 'Отрочество', category: 'существительные' },
    'поручни': { example: 'Держись за пОручни в метро,\nЧтоб сохранить свое нутро', correct: 'пОручни', category: 'существительные' },
    'прозорлива': { example: 'Она была смазли́ва, болтли́ва, суетли́ва, но крайне прозорлИва.', correct: 'прозорлИва', category: 'наречия' },
    'прозорливый': { example: 'Она была смазли́ва, болтли́ва, суетли́ва, но крайне прозорлИва.', correct: 'прозорлИвый', category: 'прилагательные' },
    'приданое': { example: 'Чтоб было придАное,\nКрепкое, недраное', correct: 'придАное', category: 'существительные' },
    'свёкла': { example: 'Посадила Фёкла,\nИ горох и свЁклу', correct: 'свЁкла', category: 'существительные' },
    'сироты': { example: 'Не пугайся! что ты! что ты!\nЭти дети сирОты', correct: 'сирОты', category: 'существительные' },
    'сливовый': { example: 'Несу в корзине Ивовой,\nПирог с начинкой слИвовой.', correct: 'слИвовый', category: 'прилагательные' },
    'сосредоточение': { example: 'Творожок просроченый -\nЗла сосредотОчение', correct: 'сосредотОчение', category: 'существительные' },
    'средства': { example: 'Где найти нам срЕдства,\nЧтоб вернуться в детство', correct: 'срЕдства', category: 'существительные' },
    'столяр': { example: 'Окна красит нам маляр,\nШкафчик мастерит столЯр.', correct: 'столЯр', category: 'существительные' },
    'торты': { example: 'Не налезли шорты,\nЧасто ели тОрты', correct: 'тОрты', category: 'существительные' },
    'туфля': { example: 'Слово тУфля я прочту,\nС ударением на у', correct: 'тУфля', category: 'существительные' },
    'верна': { example: 'Очередная шла весна,\nА я была ему вернА', correct: 'вернА', category: 'наречия' },
    'важна': { example: 'Юная княжна́, Статна и важнА', correct: 'важнА', category: 'наречия' },
    'цемент': { example: 'На стройке вчера произошел инцидент\nКто-то похитил и вывез цемЕнт.', correct: 'цемЕнт', category: 'существительные' },
    'центнер': { example: 'Для такого пациента\nЛекарств получен целый цЕнтнер', correct: 'цЕнтнер', category: 'существительные' },
    'цепочка': { example: 'Очень любят дочки\nБрошки и цепОчки', correct: 'цепОчка', category: 'существительные' },
    'шарфы': { example: 'Как у нашей Марфы\nЕсть в полоску шАрфы.', correct: 'шАрфы', category: 'существительные' },
    'эксперт': { example: 'Они ходят на концерты как великие экспЕрты', correct: 'экспЕрт', category: 'существительные' },
    'гражданство': { example: 'Он получил гражданство в новой стране.', correct: 'граждАнство', category: 'существительные' },
    'дефис': { example: 'В слове "по-русски" стоит дефИс.', correct: 'дефИс', category: 'существительные' },
    'договоренность': { example: 'Мы достигли договоренности по всем вопросам.', correct: 'договорЁнность', category: 'существительные' },
    'документ': { example: 'Это важный докумЕнт, сохрани его.', correct: 'докумЕнт', category: 'существительные' },
    'досуг': { example: 'В свободный досУг он любит читать.', correct: 'досУг', category: 'существительные' },
    'еретик': { example: 'ЕгО объявили еретИком за новые идеи.', correct: 'еретИк', category: 'существительные' },
    'корысть': { example: 'Он действовал из корЫсти, а не из доброты.', correct: 'корЫсть', category: 'существительные' },
    'локтя': { example: 'Он ударился лОктем о дверь.', correct: 'лОктя', category: 'существительные' },
    'локтей': { example: 'Измерьте расстояние в локтЯх.', correct: 'локтЕй', category: 'существительные' },
    'лыжня': { example: 'Мы шли по лыжнЕ весь день.', correct: 'лыжнЯ', category: 'существительные' },
    'намерение': { example: 'У него были серьёзные намЕрения.', correct: 'намЕрение', category: 'существительные' },
    'нарост': { example: 'На дереве образовался нарОст.', correct: 'нарОст', category: 'существительные' },
    'недруг': { example: 'Будь осторожен, здесь может быть нЕдруг.', correct: 'нЕдруг', category: 'существительные' },
    'ненависть': { example: 'Он испытывал нЕнависть к несправедливости.', correct: 'нЕнависть', category: 'существительные' },
    'партер': { example: 'Мы купили билеты в партЕр театра.', correct: 'партЕр', category: 'существительные' },
    'портфель': { example: 'Он носил важные бумаги в портфЕле.', correct: 'портфЕль', category: 'существительные' },
    'призыв': { example: 'ПризЫв к действию был услышан всеми.', correct: 'призЫв', category: 'существительные' },
    'созыв': { example: 'Был объявлен созЫв парламента.', correct: 'созЫв', category: 'существительные' },
    'статуя': { example: 'На площади установили новую стАтую.', correct: 'стАтуя', category: 'существительные' },
    'таможня': { example: 'На тамОжне проверили наш багаж.', correct: 'тамОжня', category: 'существительные' },
    'шофер': { example: 'ШофЁр довёз нас до самого дома.', correct: 'шофЁр', category: 'существительные' },
    
    // Новые слова с буквой Ё
    'довезенный': { example: 'Груз был довезЁн до места назначения.', correct: 'довезЁнный', category: 'причастия' },
    'заселенный': { example: 'Дом был заселЁн новыми жильцами.', correct: 'заселЁнный', category: 'причастия' },
    'низведенный': { example: 'Он был низведЁн до простого служащего.', correct: 'низведЁнный', category: 'причастия' },
    'облегченный': { example: 'Его облегчЁнный вздох был слышен всем.', correct: 'облегчЁнный', category: 'причастия' },
    'ободренный': { example: 'ОбодрЁнный успехом, он продолжил работу.', correct: 'ободрЁнный', category: 'причастия' },
    'обострённый': { example: 'ОбострЁнное чувство справедливости.', correct: 'обострЁнный', category: 'причастия' },
    'отключенный': { example: 'ОтключЁнный от сети прибор.', correct: 'отключЁнный', category: 'причастия' },
    'повторённый': { example: 'ПовторЁнный несколько раз вопрос.', correct: 'повторЁнный', category: 'причастия' },
    'поделенный': { example: 'ПоделЁнный на части пирог.', correct: 'поделЁнный', category: 'причастия' },
    'прирученный': { example: 'ПриручЁнный дикий зверь.', correct: 'приручЁнный', category: 'причастия' },
    'углубленный': { example: 'УглублЁнный анализ проблемы.', correct: 'углублЁнный', category: 'причастия' },
    
    // Слова с индивидуальными стишками
    'загнутый': { example: 'Древний старик по дороге шагал, зАгнутый посох в руке он держал.', correct: 'зАгнутый', category: 'прилагательные' },
    'занята': { example: 'Делом ты занят, и я занятА - скучать не приходится - вот красота!', correct: 'занятА', category: 'наречия' },
    'запертый': { example: 'Сундучок под скатертью - оказался зАпертый.', correct: 'зАпертый', category: 'прилагательные' },
    'кормящий': { example: 'Сидели двое: зайчик дрожащи, и мальчик с рук его кормЯщий.', correct: 'кормЯщий', category: 'прилагательные' },
    'кровоточащий': { example: 'Паломник молится стоящий, у иконы кровоточАщей.', correct: 'кровоточАщий', category: 'прилагательные' },
    'наживший': { example: 'Человек в деревне живший, состоянье не нажИвший, был скромнягою притихшим.', correct: 'нажИвший', category: 'причастия' },
    'наливший': { example: 'Человек в деревне живший, состоянье не нажИвший, был скромнягою притихшим.', correct: 'налИвший', category: 'причастия' },
    'понявший': { example: 'Хранит природы чистоту, понЯвший мира красоту.', correct: 'понЯвший', category: 'причастия' },
    'принята': { example: 'Какая это красота, я нынче в школу принятА.', correct: 'принятА', category: 'наречия' },
    'проживший': { example: 'Ученый, новый мир открывший, был человек, много прожИвший.', correct: 'прожИвший', category: 'причастия' },
    'снята': { example: 'Дача снятА, кругом красота.', correct: 'снятА', category: 'наречия' },
    'согнутый': { example: 'Стоял в пальто расстёгнутом, от холода был сОгнутый.', correct: 'сОгнутый', category: 'прилагательные' },
    
    // Деепричастия
    'закупорив': { example: 'ЗакУпорив бутылку, поставил её в холодильник.', correct: 'закУпорив', category: 'деепричастия' },
    'начав': { example: 'НачАв работу, не отвлекался до конца дня.', correct: 'начАв', category: 'деепричастия' },
    'начавшись': { example: 'НачАвшись с мелкого дождя, гроза усилилась.', correct: 'начАвшись', category: 'деепричастия' },
    'отдав': { example: 'ОтдАв долг, почувствовал облегчение.', correct: 'отдАв', category: 'деепричастия' },
    'подняв': { example: 'ПоднЯв тяжёлый чемодан, вышел из поезда.', correct: 'поднЯв', category: 'деепричастия' },
    'поняв': { example: 'ПонЯв свою ошибку, сразу же извинился.', correct: 'понЯв', category: 'деепричастия' },
    'прибыв': { example: 'ПрибЫв на станцию, отправился в гостиницу.', correct: 'прибЫв', category: 'деепричастия' },
    'создав': { example: 'СоздАв проект, представил его руководству.', correct: 'создАв', category: 'деепричастия' },
    
    // Наречия
    'вовремя': { example: 'Пришёл вОвремя, встреча ещё не началась.', correct: 'вОвремя', category: 'наречия' },
    'доверху': { example: 'Наполнил стакан дОверху, вода чуть не пролилась.', correct: 'дОверху', category: 'наречия' },
    'донельзя': { example: 'Устал донЕльзя, сил совсем не осталось.', correct: 'донЕльзя', category: 'наречия' },
    'донизу': { example: 'Спустился дОнизу, там было прохладнее.', correct: 'дОнизу', category: 'наречия' },
    'досуха': { example: 'Вытер посуду дОсуха, поставил в шкаф.', correct: 'дОсуха', category: 'наречия' },
    'засветло': { example: 'Вышли зАсветло, чтобы успеть до темноты.', correct: 'зАсветло', category: 'наречия' },
    'затемно': { example: 'Вернулись зАтемно, пришлось включать фонарик.', correct: 'зАтемно', category: 'наречия' },
    'надолго': { example: 'Уехал надОлго, вернётся только через месяц.', correct: 'надОлго', category: 'наречия' },
    'ненадолго': { example: 'Зашёл ненадОлго, всего на пару минут.', correct: 'ненадОлго', category: 'наречия' },
    
    // Глаголы - добавлены недостающие ударения
    'брала': { example: 'Она бралА книгу с полки.', correct: 'бралА', category: 'глаголы' },
    'бралась': { example: 'Она бралАсь за самое сложное задание.', correct: 'бралАсь', category: 'глаголы' },
    'взяла': { example: 'Она взяла сумку и вышла.', correct: 'взялА', category: 'глаголы' },
    'взялась': { example: 'Она взялАсь за эту работу с энтузиазмом.', correct: 'взялАсь', category: 'глаголы' },
    'влилась': { example: 'Река влилАсь в море.', correct: 'влилАсь', category: 'глаголы' },
    'ворвалась': { example: 'Она ворвалАсь в комнату с криком.', correct: 'ворвалАсь', category: 'глаголы' },
    'восприняла': { example: 'Она воспринялА новость спокойно.', correct: 'воспринялА', category: 'глаголы' },
    'воссоздала': { example: 'Она воссоздалА картину по описанию.', correct: 'воссоздалА', category: 'глаголы' },
    'вручит': { example: 'Он вручИт награду победителю.', correct: 'вручИт', category: 'глаголы' },
    'гнала': { example: 'Она гналАсь за убегающей собакой.', correct: 'гналА', category: 'глаголы' },
    'гналась': { example: 'Она гналАсь за ним по улице.', correct: 'гналАсь', category: 'глаголы' },
    'добрала': { example: 'Она добрАла недостающие баллы.', correct: 'добралА', category: 'глаголы' },
    'добралась': { example: 'Она добралАсь до вершины горы.', correct: 'добралАсь', category: 'глаголы' },
    'дождалась': { example: 'Она дождалАсь своего друга.', correct: 'дождалАсь', category: 'глаголы' },
    'дозвонится': { example: 'Он дозвонИтся, когда будет время.', correct: 'дозвонИтся', category: 'глаголы' },
    'дозировать': { example: 'Нужно правильно дозИровать лекарство.', correct: 'дозИровать', category: 'глаголы' },
    'ждала': { example: 'Она ждалА его целый час.', correct: 'ждалА', category: 'глаголы' },
    'жилось': { example: 'Ему хорошо жилОсь в деревне.', correct: 'жилОсь', category: 'глаголы' },
    'закупорить': { example: 'Нужно закУпорить бутылку плотно.', correct: 'закУпорить', category: 'глаголы' },
    'занял': { example: 'Он зАнял деньги у друга.', correct: 'зАнял', category: 'глаголы' },
    'заняла': { example: 'Она занялА первое место.', correct: 'занялА', category: 'глаголы' },
    'заперла': { example: 'Она заперлА дверь на ключ.', correct: 'заперлА', category: 'глаголы' },
    'запломбировать': { example: 'Нужно запломбировАть зуб.', correct: 'запломбировАть', category: 'глаголы' },
    'защемит': { example: 'Дверь защемИт палец, если неосторожно.', correct: 'защемИт', category: 'глаголы' },
    'звала': { example: 'Она звалА его к столу.', correct: 'звалА', category: 'глаголы' },
    'звонит': { example: 'Телефон звонИт уже пятый раз.', correct: 'звонИт', category: 'глаголы' },
    'кашлянуть': { example: 'Он решил кАшлянуть, чтобы привлечь внимание.', correct: 'кАшлянуть', category: 'глаголы' },
    'клала': { example: 'Она клАла сахар в чай.', correct: 'клАла', category: 'глаголы' },
    'клеить': { example: 'Нужно клЕить обои аккуратно.', correct: 'клЕить', category: 'глаголы' },
    'кралась': { example: 'Она крАлась по тёмному коридору.', correct: 'крАлась', category: 'глаголы' },
    'кровоточить': { example: 'Рана продолжает кровоточИть.', correct: 'кровоточИть', category: 'глаголы' },
    'лгала': { example: 'Она лгалА, но это было заметно.', correct: 'лгалА', category: 'глаголы' },
    'лила': { example: 'Она лилА воду в стакан.', correct: 'лилА', category: 'глаголы' },
    'лилась': { example: 'Музыка лилАсь из открытого окна.', correct: 'лилАсь', category: 'глаголы' },
    'наврала': { example: 'Она навралА, что не знает ответа.', correct: 'навралА', category: 'глаголы' },
    'наделит': { example: 'Он наделИт тебя необходимыми полномочиями.', correct: 'наделИт', category: 'глаголы' },
    'надорвалась': { example: 'Она надорвалАсь, поднимая тяжесть.', correct: 'надорвалАсь', category: 'глаголы' },
    'назвалась': { example: 'Она назвалАсь другим именем.', correct: 'назвалАсь', category: 'глаголы' },
    'накренится': { example: 'Лодка накренИтся, если все встанут.', correct: 'накренИтся', category: 'глаголы' },
    'налила': { example: 'Она налилА чай в чашку.', correct: 'налилА', category: 'глаголы' },
    'нарвала': { example: 'Она нарвалА цветов в саду.', correct: 'нарвалА', category: 'глаголы' },
    'начал': { example: 'Он нАчал работу рано утром.', correct: 'нАчал', category: 'глаголы' },
    'начала': { example: 'Она началА петь.', correct: 'началА', category: 'глаголы' },
    'обзвонит': { example: 'Он обзвонИт всех участников.', correct: 'обзвонИт', category: 'глаголы' },
    'облегчит': { example: 'Это облегчИт выполнение задачи.', correct: 'облегчИт', category: 'глаголы' },
    'облилась': { example: 'Она облилАсь духами.', correct: 'облилАсь', category: 'глаголы' },
    'обнялась': { example: 'Она обнялАсь с подругой.', correct: 'обнялАсь', category: 'глаголы' },
    'обогнала': { example: 'Она обогналА всех соперников.', correct: 'обогналА', category: 'глаголы' },
    'ободрала': { example: 'Она ободралА обои со стены.', correct: 'ободралА', category: 'глаголы' },
    'ободрит': { example: 'Это ободрИт его в трудную минуту.', correct: 'ободрИт', category: 'глаголы' },
    'ободрится': { example: 'Он ободрИтся, когда услышит хорошие новости.', correct: 'ободрИтся', category: 'глаголы' },
    'обострить': { example: 'Нужно обострИть внимание.', correct: 'обострИть', category: 'глаголы' },
    'одолжит': { example: 'Он одолжИт тебе книгу.', correct: 'одолжИт', category: 'глаголы' },
    'озлобить': { example: 'Это может озлОбить даже самого терпеливого.', correct: 'озлОбить', category: 'глаголы' },
    'осведомиться': { example: 'Нужно освЕдомиться о времени прибытия поезда.', correct: 'освЕдомиться', category: 'глаголы' },
    'отбыла': { example: 'Она отбылА в командировку.', correct: 'отбылА', category: 'глаголы' },
    'отдала': { example: 'Она отдалА книгу в библиотеку.', correct: 'отдалА', category: 'глаголы' },
    'откупорить': { example: 'Нужно откУпорить бутылку вина.', correct: 'откУпорить', category: 'глаголы' },
    'отозвала': { example: 'Она отозвалА своё заявление.', correct: 'отозвалА', category: 'глаголы' },
    'отозвалась': { example: 'Она отозвалАсь на мой зов.', correct: 'отозвалАсь', category: 'глаголы' },
    'перезвонит': { example: 'Он перезвонИт позже.', correct: 'перезвонИт', category: 'глаголы' },
    'перелила': { example: 'Она перелилА молоко в кувшин.', correct: 'перелилА', category: 'глаголы' },
    'плодоносить': { example: 'Дерево начало плодоносИть.', correct: 'плодоносИть', category: 'глаголы' },
    'пломбировать': { example: 'Стоматолог будет пломбировАть зуб.', correct: 'пломбировАть', category: 'глаголы' },
    'повторит': { example: 'Он повторИт это ещё раз.', correct: 'повторИт', category: 'глаголы' },
    'позвала': { example: 'Она позвалА его к столу.', correct: 'позвалА', category: 'глаголы' },
    'позвонит': { example: 'Он позвонИт вечером.', correct: 'позвонИт', category: 'глаголы' },
    'полила': { example: 'Она полилА цветы в саду.', correct: 'полилА', category: 'глаголы' },
    'положил': { example: 'Он положИл книгу на полку.', correct: 'положИл', category: 'глаголы' },
    'поняла': { example: 'Она понялА свою ошибку.', correct: 'понялА', category: 'глаголы' },
    'послала': { example: 'Она послАла письмо другу.', correct: 'послАла', category: 'глаголы' },
    'прибыл': { example: 'Поезд прИбыл вовремя.', correct: 'прИбыл', category: 'глаголы' },
    'принудить': { example: 'Никто не может принУдить его изменить решение.', correct: 'принУдить', category: 'глаголы' },
    'принял': { example: 'Он принЯл решение.', correct: 'принЯл', category: 'глаголы' },
    'рвала': { example: 'Она рвалА цветы на лугу.', correct: 'рвалА', category: 'глаголы' },
    'сверлит': { example: 'Он сверлИт стену дрелью.', correct: 'сверлИт', category: 'глаголы' },
    'сняла': { example: 'Она снялА пальто в прихожей.', correct: 'снялА', category: 'глаголы' },
    'соврала': { example: 'Она совралА о своём возрасте.', correct: 'совралА', category: 'глаголы' },
    'создала': { example: 'Она создалА прекрасную картину.', correct: 'создалА', category: 'глаголы' },
    'сорвала': { example: 'Она сорвалА яблоко с ветки.', correct: 'сорвалА', category: 'глаголы' },
    'сорит': { example: 'Он сорИт на улице.', correct: 'сорИт', category: 'глаголы' },
    'убрала': { example: 'Она убралА комнату.', correct: 'убралА', category: 'глаголы' },
    'углубить': { example: 'Нужно углубИть знания.', correct: 'углубИть', category: 'глаголы' },
    'укрепит': { example: 'Это укрепИт вашу дружбу.', correct: 'укрепИт', category: 'глаголы' },
    'черпать': { example: 'Можно чЕрпать воду из колодца.', correct: 'чЕрпать', category: 'глаголы' },
    'щелкать': { example: 'Он щЁлкает семечки.', correct: 'щЁлкать', category: 'глаголы' },
    'щемит': { example: 'Сердце щемИт от тоски.', correct: 'щемИт', category: 'глаголы' },
    
    'занятый': { example: 'Человек был зАнят важным делом.', correct: 'зАнятый', category: 'прилагательные' },
    'начатый': { example: 'Работа была нАчата вовремя.', correct: 'нАчатый', category: 'причастия' },
    'нанявшийся': { example: 'Он нанялся на новую работу.', correct: 'нанЯвшийся', category: 'причастия' }
};

// Добавляем правила
const rules = [
    {
        id: 1,
        title: "Глаголы женского рода прошедшего времени",
        content: "В глаголах женского рода, прошедшего времени ударение падает на последний слог.\n\nИсключения: клАла, крАла, крАлась, слАла, послАла, отослАла.\n\nПримеры:\n• Она бралА книгу (правильно: бралА)\n• Она взялА сумку (правильно: взялА)\n• Она лгалА (правильно: лгалА)\n• Но: Она клАла сахар (исключение: клАла)"
    },
    {
        id: 2,
        title: "Глаголы с приставкой ВЫ-",
        content: "Глаголы с ударной приставкой ВЫ- — она перетягивает ударение на себя.\n\nПримеры:\n• лилА - вЫлила\n• крАла - вЫкрала\n• бралА - вЫбрала\n\nПравило: Если в глаголе есть приставка ВЫ-, ударение всегда падает на неё."
    },
    {
        id: 3,
        title: "Глаголы будущего времени",
        content: "В глаголах, которые отвечают на вопрос: что сделает? - ударение падает на последний слог.\n\nИсключение: глаголы с ударной приставкой вы-.\n\nПримеры:\n• Он дозвонИтся (правильно: дозвонИтся)\n• Она наделИт (правильно: наделИт)\n• Он облегчИт (правильно: облегчИт)\n• Но: Он вЫберет (исключение с приставкой вы-)"
    },
    {
        id: 4,
        title: "Слова на -провод",
        content: "В словах, оканчивающихся на -провод, ударение всегда падает на последний слог.\n\nПримеры:\n• водопровОд\n• газопровОд\n• нефтепровОд\n• мусоропровОд\n• путепровОд\n\nЭто правило помогает запомнить ударение в целом классе слов."
    }
];

// Достижения (обновлены условия)
const achievements = [
    { id: 1, name: 'Первые шаги', desc: 'Пройдите первый тест', icon: '👣', condition: (stats) => stats.testsCompleted >= 1 },
    { id: 2, name: 'Словарный запас', desc: 'Изучите 10 слов', icon: '📚', condition: (stats) => stats.wordsLearned >= 10 },
    { id: 3, name: 'Отличник', desc: 'Получите 100% в тесте', icon: '🏆', condition: (stats) => stats.perfectTests >= 1 },
    { id: 4, name: 'Мастер ударений', desc: 'Изучите 25 слов', icon: '🎓', condition: (stats) => stats.wordsLearned >= 25 },
    { id: 5, name: 'Серия побед', desc: '5 дней подряд занятий', icon: '🔥', condition: (stats) => stats.streak >= 5 },
    { id: 6, name: 'Эксперт', desc: 'Пройдите 10 тестов', icon: '⭐', condition: (stats) => stats.testsCompleted >= 10 },
    { id: 7, name: 'Всезнайка', desc: 'Изучите все слова', icon: '👑', condition: (stats) => stats.wordsLearned >= Object.keys(stressExamples).length },
    { id: 8, name: 'Любимые слова', desc: 'Добавьте 10 слов в избранное', icon: '❤️', condition: (stats) => stats.favoriteWordsCount >= 10 },
    { id: 9, name: 'Сердцееда', desc: 'Добавьте 25 слов в избранное', icon: '💖', condition: (stats) => stats.favoriteWordsCount >= 25 },
    { id: 10, name: 'Знаток правил', desc: 'Изучите все правила', icon: '📖', condition: (stats) => stats.rulesLearned >= rules.length },
    { id: 11, name: 'Первое слово', desc: 'Добавьте своё первое слово', icon: '✨', condition: (stats) => stats.customWordsAdded >= 1 },
    { id: 12, name: 'Составитель учебника', desc: 'Добавьте 10 своих слов', icon: '📝', condition: (stats) => stats.customWordsAdded >= 10 },
    { id: 13, name: 'Вдохновленный лингвист', desc: 'Добавьте 25 своих слов', icon: '🧠', condition: (stats) => stats.customWordsAdded >= 25 },
    { id: 14, name: 'Мастер мнемоники', desc: 'Добавьте 50 своих слов', icon: '🎯', condition: (stats) => stats.customWordsAdded >= 50 },
    { id: 15, name: 'Составитель словаря', desc: 'Добавьте 100 своих слов', icon: '📚', condition: (stats) => stats.customWordsAdded >= 100 }
];

// Гласные буквы
const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';

// Переменные состояния
let userStats = {
    username: 'Гость',
    level: 1,
    exp: 0,
    wordsLearned: 0,
    testsCompleted: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    streak: 0,
    lastLogin: null,
    learnedWords: {},
    unlockedAchievements: [],
    perfectTests: 0,
    firstLogin: null,
    favoriteWords: [],
    favoriteWordsCount: 0,
    rulesLearned: 0,
    customWordsAdded: 0,
    customWords: {}
};

let testWords = [];
let currentTestWordIndex = 0;
let correctAnswersCount = 0;
let testResults = [];
let testInProgress = false;
let selectedOption = null;
let answerSubmitted = false;
let testModeQuestions = 10;
let userAnswers = {};
let selectedCategory = 'все';
let showFavoritesOnly = false;
let currentTestCategory = 'all';
let currentTestWord = '';

// Получаем элементы DOM
const elements = {};

// ==================== ФУНКЦИИ ДЛЯ ДОБАВЛЕНИЯ СЛОВ ====================

function addCustomWord(word, stress, example, category) {
    const wordLower = word.toLowerCase();
    
    // Проверяем, нет ли уже такого слова
    if (stressExamples[wordLower] && !stressExamples[wordLower].isCustom) {
        return { success: false, message: 'Это слово уже есть в стандартном словаре!' };
    }
    
    if (userStats.customWords[wordLower]) {
        return { success: false, message: 'Вы уже добавляли это слово!' };
    }
    
    // Форматируем ударение (делаем заглавной ударную гласную)
    const formattedStress = formatCustomStress(word, stress);
    
    // Если пример пустой, создаем базовый пример
    const finalExample = example.trim() || 
        `Запомните ударение в слове "${wordLower}" - ${formattedStress}.`;
    
    // Сохраняем слово
    userStats.customWords[wordLower] = {
        word: wordLower,
        stress: formattedStress,
        example: finalExample,
        category: category,
        added: new Date().toISOString(),
        isCustom: true
    };
    
    // Добавляем в общий словарь
    stressExamples[wordLower] = {
        example: finalExample,
        correct: formattedStress,
        category: category,
        isCustom: true
    };
    
    // Добавляем в соответствующую категорию
    if (!wordCategories[category]) {
        wordCategories[category] = [];
    }
    wordCategories[category].push(wordLower);
    
    // Обновляем статистику
    userStats.customWordsAdded++;
    
    // Сохраняем
    saveUserStats();
    
    return { 
        success: true, 
        message: `Слово "${wordLower}" успешно добавлено!`,
        word: wordLower,
        stress: formattedStress
    };
}

function formatCustomStress(word, stressInput) {
    const wordLower = word.toLowerCase();
    const stressLower = stressInput.toLowerCase();
    
    // Находим ударную гласную
    let stressIndex = -1;
    let stressChar = '';
    
    for (let i = 0; i < stressLower.length; i++) {
        if (stressLower[i] !== wordLower[i] && vowels.includes(stressLower[i])) {
            stressIndex = i;
            stressChar = stressLower[i];
            break;
        }
    }
    
    // Если не нашли разницы, ищем заглавную букву
    if (stressIndex === -1) {
        for (let i = 0; i < stressInput.length; i++) {
            if (stressInput[i] === stressInput[i].toUpperCase() && vowels.includes(stressInput[i].toLowerCase())) {
                stressIndex = i;
                stressChar = stressInput[i].toLowerCase();
                break;
            }
        }
    }
    
    // Форматируем слово с ударной гласной
    if (stressIndex !== -1) {
        const chars = wordLower.split('');
        chars[stressIndex] = chars[stressIndex].toUpperCase();
        return chars.join('');
    }
    
    // Если не удалось определить, возвращаем как есть
    return stressInput;
}

function validateCustomWord(word, stress, example) {
    const errors = [];
    
    if (!word || word.trim().length < 2) {
        errors.push('Слово должно содержать хотя бы 2 буквы');
    }
    
    if (!stress || stress.trim().length < 2) {
        errors.push('Укажите правильное ударение');
    }
    
    // Пример теперь необязательный
    // if (!example || example.trim().length < 10) {
    //     errors.push('Пример должен содержать хотя бы 10 символов');
    // }
    
    // Проверяем, есть ли ударная гласная в варианте ударения
    const hasStressVowel = stress.split('').some(char => 
        vowels.includes(char.toUpperCase()) && char === char.toUpperCase()
    );
    
    if (!hasStressVowel) {
        errors.push('В варианте ударения должна быть заглавная ударная гласная (например: красИвее)');
    }
    
    // Проверяем, совпадают ли буквы
    const wordLetters = word.toLowerCase().replace(/[^а-яё]/g, '');
    const stressLetters = stress.toLowerCase().replace(/[^а-яё]/g, '');
    
    if (wordLetters !== stressLetters) {
        errors.push('Буквы в слове и варианте ударения должны совпадать');
    }
    
    return errors;
}

function setupCustomWordsFeature() {
    const addWordBtn = document.getElementById('addWordBtn');
    const newWordInput = document.getElementById('newWordInput');
    const newWordStress = document.getElementById('newWordStress');
    const newWordExample = document.getElementById('newWordExample');
    const newWordCategory = document.getElementById('newWordCategory');
    const addWordMessage = document.getElementById('addWordMessage');
    
    if (!addWordBtn) return;
    
    addWordBtn.addEventListener('click', () => {
        const word = newWordInput.value.trim();
        const stress = newWordStress.value.trim();
        const example = newWordExample.value.trim();
        const category = newWordCategory.value;
        
        // Валидация
        const errors = validateCustomWord(word, stress, example);
        
        if (errors.length > 0) {
            showAddWordMessage(errors.join('<br>'), 'error');
            return;
        }
        
        // Добавляем слово
        const result = addCustomWord(word, stress, example, category);
        
        if (result.success) {
            showAddWordMessage(result.message, 'success');
            
            // Очищаем поля
            newWordInput.value = '';
            newWordStress.value = '';
            newWordExample.value = '';
            
            // Обновляем интерфейс
            updateWordGrid();
            updateCategoryDisplay();
            updateBadges();
            updateCustomWordsDisplay();
            checkAchievements();
            
            // Показываем добавленное слово
            setTimeout(() => {
                showWordWithStress(result.word);
            }, 500);
        } else {
            showAddWordMessage(result.message, 'error');
        }
    });
    
    // Автозаполнение ударения при вводе слова
    newWordInput.addEventListener('blur', () => {
        if (!newWordStress.value && newWordInput.value) {
            newWordStress.value = newWordInput.value;
        }
    });
    
    // Подсказка при фокусе на поле ударения
    newWordStress.addEventListener('focus', () => {
        if (newWordStress.value === newWordInput.value) {
            const word = newWordInput.value;
            if (word.length > 0) {
                // Предлагаем первый вариант с ударением на первую гласную
                for (let i = 0; i < word.length; i++) {
                    const char = word[i].toLowerCase();
                    if (vowels.includes(char)) {
                        const stressWord = word.substring(0, i) + char.toUpperCase() + word.substring(i + 1);
                        newWordStress.value = stressWord;
                        break;
                    }
                }
            }
        }
    });
}

function showAddWordMessage(message, type) {
    const addWordMessage = document.getElementById('addWordMessage');
    if (!addWordMessage) return;
    
    addWordMessage.textContent = message;
    addWordMessage.className = `add-word-message ${type}`;
    addWordMessage.style.display = 'block';
    
    setTimeout(() => {
        addWordMessage.style.display = 'none';
    }, 5000);
}

function updateCustomWordsDisplay() {
    const customWordsGrid = document.getElementById('customWordsGrid');
    const emptyCustomMessage = document.getElementById('emptyCustomMessage');
    const customWordsCount = document.getElementById('customWordsCount');
    
    if (!customWordsGrid) return;
    
    const customWords = Object.keys(userStats.customWords).sort();
    
    if (customWords.length === 0) {
        if (emptyCustomMessage) emptyCustomMessage.style.display = 'block';
        if (customWordsGrid) customWordsGrid.style.display = 'none';
        if (customWordsCount) customWordsCount.textContent = `Всего: 0 слов`;
        return;
    }
    
    if (emptyCustomMessage) emptyCustomMessage.style.display = 'none';
    if (customWordsGrid) {
        customWordsGrid.style.display = 'grid';
        customWordsGrid.innerHTML = '';
    }
    
    customWords.forEach(wordKey => {
        const wordData = userStats.customWords[wordKey];
        const chip = document.createElement('div');
        chip.className = 'word-chip custom-word';
        chip.innerHTML = `
            ${wordData.word}
            <div style="font-size: 0.8rem; color: #666; margin-top: 5px;">${wordData.category}</div>
        `;
        chip.addEventListener('click', () => {
            // Переключаемся на словарь и показываем слово
            document.querySelector('.mode-tab[data-mode="dictionary"]').click();
            elements.wordInput.value = wordData.word;
            showWordWithStress(wordData.word);
        });
        if (customWordsGrid) customWordsGrid.appendChild(chip);
    });
    
    if (customWordsCount) customWordsCount.textContent = `Всего: ${customWords.length} слов`;
}

// ==================== ОСНОВНЫЕ ФУНКЦИИ ====================

function init() {
    // Инициализируем элементы DOM
    initElements();
    
    // Загружаем статистику из localStorage
    loadUserStats();
    
    // Инициализируем приложение
    updateStreak();
    initWordGrid();
    initCategories();
    initAchievements();
    initRules();
    updateBadges();
    initFavoritesDisplay();
    updateProfileDisplay();
    setupCustomWordsFeature();
    updateCustomWordsDisplay();
    
    // Обработчики событий
    setupEventListeners();
    
    // Показать приветствие
    setTimeout(() => {
        showNotification(`Добро пожаловать в помощник по ударениям!`);
    }, 500);
}

function initElements() {
    // Собираем все элементы DOM
    elements.mainContainer = document.getElementById('mainContainer');
    elements.wordInput = document.getElementById('wordInput');
    elements.submitBtn = document.getElementById('submitBtn');
    elements.exampleText = document.getElementById('exampleText');
    elements.stressWord = document.getElementById('stressWord');
    elements.favoriteButton = document.getElementById('favoriteButton');
    elements.wordGrid = document.getElementById('wordGrid');
    elements.modeTabs = document.querySelectorAll('.mode-tab');
    elements.modeContents = document.querySelectorAll('.mode-content');
    elements.startTestBtn = document.getElementById('startTestBtn');
    elements.testModeBtns = document.querySelectorAll('.test-mode-btn');
    elements.testSettings = document.getElementById('testSettings');
    elements.testControls = document.querySelector('.test-controls');
    elements.endTestBtn = document.getElementById('endTestBtn');
    elements.testQuestion = document.getElementById('testQuestion');
    elements.testWord = document.getElementById('testWord');
    elements.testOptions = document.getElementById('testOptions');
    elements.testFavoriteButton = document.getElementById('testFavoriteButton');
    elements.submitAnswerBtn = document.getElementById('submitAnswerBtn');
    elements.testNavigation = document.getElementById('testNavigation');
    elements.prevQuestionBtn = document.getElementById('prevQuestionBtn');
    elements.nextQuestionBtn = document.getElementById('nextQuestionBtn');
    elements.testFeedback = document.getElementById('testFeedback');
    elements.testResult = document.getElementById('testResult');
    elements.testExample = document.getElementById('testExample');
    elements.testResultsSummary = document.getElementById('testResultsSummary');
    elements.currentQuestion = document.getElementById('currentQuestion');
    elements.totalQuestions = document.getElementById('totalQuestions');
    elements.correctCount = document.getElementById('correctCount');
    elements.finalScore = document.getElementById('finalScore');
    elements.correctAnswers = document.getElementById('correctAnswers');
    elements.incorrectAnswers = document.getElementById('incorrectAnswers');
    elements.resultsWords = document.getElementById('resultsWords');
    elements.restartTestBtn = document.getElementById('restartTestBtn');
    elements.newTestBtn = document.getElementById('newTestBtn');
    elements.toDictionaryBtn = document.getElementById('toDictionaryBtn');
    elements.categoriesGrid = document.getElementById('categoriesGrid');
    elements.categoryWordsGrid = document.getElementById('categoryWordsGrid');
    elements.totalProgress = document.getElementById('totalProgress');
    elements.userProfile = document.getElementById('userProfile');
    elements.userAvatar = document.getElementById('userAvatar');
    elements.userLevel = document.getElementById('userLevel');
    elements.userExp = document.getElementById('userExp');
    elements.achievementBadge = document.getElementById('achievementBadge');
    elements.profileModal = document.getElementById('profileModal');
    elements.profileAvatar = document.getElementById('profileAvatar');
    elements.profileUsername = document.getElementById('profileUsername');
    elements.profileLevel = document.getElementById('profileLevel');
    elements.profileExpBar = document.getElementById('profileExpBar');
    elements.profileExpText = document.getElementById('profileExpText');
    elements.profileWordsLearned = document.getElementById('profileWordsLearned');
    elements.profileTestsCompleted = document.getElementById('profileTestsCompleted');
    elements.profileCorrectAnswers = document.getElementById('profileCorrectAnswers');
    elements.profileStreak = document.getElementById('profileStreak');
    elements.profileFavorites = document.getElementById('profileFavorites');
    elements.profileCustomWords = document.getElementById('profileCustomWords');
    elements.achievementsGrid = document.getElementById('achievementsGrid');
    elements.dictionaryBadge = document.getElementById('dictionaryBadge');
    elements.testBadge = document.getElementById('testBadge');
    elements.categoriesBadge = document.getElementById('categoriesBadge');
    elements.favoritesBadge = document.getElementById('favoritesBadge');
    elements.customWordsBadge = document.getElementById('customWordsBadge');
    elements.rulesBadge = document.getElementById('rulesBadge');
    elements.showFavoritesToggle = document.getElementById('showFavoritesToggle');
    elements.showFavoritesToggleCategories = document.getElementById('showFavoritesToggleCategories');
    elements.favoritesMode = document.getElementById('favorites-mode');
    elements.favoritesGrid = document.getElementById('favoritesGrid');
    elements.emptyFavoritesMessage = document.getElementById('emptyFavoritesMessage');
    elements.favoritesCount = document.getElementById('favoritesCount');
    elements.practiceFavoritesBtn = document.getElementById('practiceFavoritesBtn');
    elements.rulesMode = document.getElementById('rules-mode');
    elements.rulesList = document.getElementById('rulesList');
    elements.rulesCount = document.getElementById('rulesCount');
}

function setupEventListeners() {
    // Основные обработчики
    elements.submitBtn.addEventListener('click', onSubmit);
    elements.wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') onSubmit();
    });

    // Кнопка избранного
    elements.favoriteButton.addEventListener('click', toggleFavorite);
    elements.testFavoriteButton.addEventListener('click', toggleFavoriteInTest);

    // Фильтр избранного
    elements.showFavoritesToggle.addEventListener('click', toggleFavoritesFilter);
    elements.showFavoritesToggleCategories.addEventListener('click', toggleFavoritesFilterCategories);

    // Тестовый режим
    elements.startTestBtn.addEventListener('click', startTest);
    elements.submitAnswerBtn.addEventListener('click', checkAnswer);
    elements.prevQuestionBtn.addEventListener('click', goToPreviousQuestion);
    elements.nextQuestionBtn.addEventListener('click', goToNextQuestion);
    elements.endTestBtn.addEventListener('click', endTest);
    elements.restartTestBtn.addEventListener('click', restartTest);
    elements.newTestBtn.addEventListener('click', newTest);
    elements.toDictionaryBtn.addEventListener('click', goToDictionary);

    // Выбор режима теста
    elements.testModeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.questions) {
                elements.testModeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                testModeQuestions = parseInt(btn.dataset.questions);
            } else if (btn.dataset.testCategory) {
                document.querySelectorAll('.test-mode-btn[data-test-category]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTestCategory = btn.dataset.testCategory;
            }
        });
    });

    // Переключение режимов
    elements.modeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.dataset.mode;
            elements.modeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            elements.modeContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${mode}-mode`) {
                    content.classList.add('active');
                    if (mode === 'categories') {
                        updateCategoryDisplay();
                    } else if (mode === 'favorites') {
                        updateFavoritesDisplay();
                    } else if (mode === 'custom') {
                        updateCustomWordsDisplay();
                    } else if (mode === 'rules') {
                        updateRulesDisplay();
                    }
                }
            });
        });
    });

    // Профиль пользователя
    elements.userProfile.addEventListener('click', showProfileModal);
    
    // Тренировка избранных слов
    elements.practiceFavoritesBtn.addEventListener('click', startFavoritesTest);
}

// ==================== СИСТЕМА ПОЛЬЗОВАТЕЛЯ ====================

function loadUserStats() {
    const saved = localStorage.getItem('stressHelperStats');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Обеспечиваем обратную совместимость
        userStats = {
            username: parsed.username || 'Гость',
            level: parsed.level || 1,
            exp: parsed.exp || 0,
            wordsLearned: parsed.wordsLearned || 0,
            testsCompleted: parsed.testsCompleted || 0,
            correctAnswers: parsed.correctAnswers || 0,
            totalAnswers: parsed.totalAnswers || 0,
            streak: parsed.streak || 0,
            lastLogin: parsed.lastLogin || new Date().toISOString(),
            learnedWords: parsed.learnedWords || {},
            unlockedAchievements: parsed.unlockedAchievements || [],
            perfectTests: parsed.perfectTests || 0,
            firstLogin: parsed.firstLogin || new Date().toISOString(),
            favoriteWords: parsed.favoriteWords || [],
            favoriteWordsCount: parsed.favoriteWordsCount || (parsed.favoriteWords ? parsed.favoriteWords.length : 0),
            rulesLearned: parsed.rulesLearned || 0,
            customWordsAdded: parsed.customWordsAdded || 0,
            customWords: parsed.customWords || {}
        };
    }
}

function saveUserStats() {
    localStorage.setItem('stressHelperStats', JSON.stringify(userStats));
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastLogin = userStats.lastLogin ? new Date(userStats.lastLogin).toDateString() : null;
    
    if (lastLogin !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastLogin === yesterdayStr) {
            userStats.streak++;
        } else if (lastLogin !== today) {
            userStats.streak = 1;
        }
        
        userStats.lastLogin = new Date().toISOString();
        saveUserStats();
    }
}

function addExperience(amount) {
    userStats.exp += amount;
    const expNeeded = userStats.level * 100;
    
    if (userStats.exp >= expNeeded) {
        userStats.level++;
        userStats.exp = userStats.exp - expNeeded;
        showLevelUpNotification();
    }
    
    saveUserStats();
    updateProfileDisplay();
}

function markWordLearned(word) {
    if (!userStats.learnedWords[word]) {
        userStats.learnedWords[word] = {
            learned: new Date().toISOString(),
            correct: 0,
            total: 0
        };
        userStats.wordsLearned = Object.keys(userStats.learnedWords).length;
        updateBadges();
        checkAchievements();
    }
}

function updateProfileDisplay() {
    // Обновляем имя пользователя
    elements.profileUsername.textContent = userStats.username;
    
    // Обновляем остальные поля
    elements.userLevel.textContent = userStats.level;
    elements.userExp.textContent = `${userStats.exp}/${userStats.level * 100}`;
    elements.userAvatar.textContent = userStats.level;
    
    elements.profileLevel.textContent = `Уровень ${userStats.level}`;
    elements.profileExpText.textContent = `Опыт: ${userStats.exp}/${userStats.level * 100}`;
    elements.profileExpBar.style.width = `${(userStats.exp / (userStats.level * 100)) * 100}%`;
    elements.profileAvatar.textContent = userStats.level;
    
    elements.profileWordsLearned.textContent = userStats.wordsLearned;
    elements.profileTestsCompleted.textContent = userStats.testsCompleted;
    elements.profileCorrectAnswers.textContent = userStats.correctAnswers;
    elements.profileStreak.textContent = userStats.streak;
    elements.profileFavorites.textContent = userStats.favoriteWordsCount;
    elements.profileCustomWords.textContent = userStats.customWordsAdded;
    
    // Обновить бейдж достижений
    const unlockedCount = userStats.unlockedAchievements.length;
    if (unlockedCount > 0) {
        elements.achievementBadge.textContent = unlockedCount;
        elements.achievementBadge.style.display = 'flex';
    } else {
        elements.achievementBadge.style.display = 'none';
    }
}

function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, gold, orange);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.5s;
    `;
    notification.innerHTML = `
        <h3>🎉 Новый уровень!</h3>
        <p>Теперь вы уровень ${userStats.level}!</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.5s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// ==================== ДОСТИЖЕНИЯ ====================

function initAchievements() {
    elements.achievementsGrid.innerHTML = '';
    achievements.forEach(achievement => {
        const isUnlocked = userStats.unlockedAchievements.includes(achievement.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            ${isUnlocked ? '<div style="color: gold; font-size: 12px;">✔ Получено</div>' : ''}
        `;
        elements.achievementsGrid.appendChild(card);
    });
}

function checkAchievements() {
    let newAchievements = false;
    achievements.forEach(achievement => {
        if (!userStats.unlockedAchievements.includes(achievement.id) && achievement.condition(userStats)) {
            userStats.unlockedAchievements.push(achievement.id);
            showAchievementNotification(achievement);
            newAchievements = true;
        }
    });
    if (newAchievements) {
        saveUserStats();
        initAchievements();
        updateProfileDisplay();
    }
}

function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ffd700, #ff9900);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideDown 0.5s;
        text-align: center;
        max-width: 300px;
    `;
    notification.innerHTML = `
        <h3>🏆 Новое достижение!</h3>
        <div style="font-size: 2rem; margin: 10px 0;">${achievement.icon}</div>
        <p><strong>${achievement.name}</strong></p>
        <p style="font-size: 0.9rem;">${achievement.desc}</p>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ==================== КАТЕГОРИИ ====================

function initCategories() {
    elements.categoriesGrid.innerHTML = '';
    
    // Добавить категорию "Все"
    const allCategory = document.createElement('div');
    allCategory.className = 'category-card active';
    allCategory.dataset.category = 'все';
    allCategory.innerHTML = `
        <div class="category-icon">📚</div>
        <div class="category-name">Все слова</div>
        <div class="category-count">${Object.keys(stressExamples).length} слов</div>
        <div class="category-progress">
            <div class="category-progress-bar" style="width: ${calculateCategoryProgress('все')}%"></div>
        </div>
    `;
    allCategory.addEventListener('click', () => selectCategory('все'));
    elements.categoriesGrid.appendChild(allCategory);
    
    // Добавить остальные категории
    Object.keys(wordCategories).forEach(categoryName => {
        const words = wordCategories[categoryName];
        const icon = getCategoryIcon(categoryName);
        const progress = calculateCategoryProgress(categoryName);
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.category = categoryName;
        categoryCard.innerHTML = `
            <div class="category-icon">${icon}</div>
            <div class="category-name">${capitalizeFirst(categoryName)}</div>
            <div class="category-count">${words.length} слов</div>
            <div class="category-progress">
                <div class="category-progress-bar" style="width: ${progress}%"></div>
            </div>
        `;
        categoryCard.addEventListener('click', () => selectCategory(categoryName));
        elements.categoriesGrid.appendChild(categoryCard);
    });
    
    updateTotalProgress();
}

function calculateCategoryProgress(category) {
    if (category === 'все') {
        const totalWords = Object.keys(stressExamples).length;
        const learnedWords = Object.keys(userStats.learnedWords).length;
        return totalWords > 0 ? Math.round((learnedWords / totalWords) * 100) : 0;
    }
    
    const words = wordCategories[category] || [];
    const learnedWords = words.filter(word => userStats.learnedWords[word]).length;
    return words.length > 0 ? Math.round((learnedWords / words.length) * 100) : 0;
}

function getCategoryIcon(category) {
    const icons = {
        'существительные': '📝',
        'прилагательные': '🎨',
        'наречия': '⚡',
        'сравнительные': '📈',
        'деепричастия': '📝',
        'глаголы': '🏃',
        'причастия': '📋'
    };
    return icons[category] || '📚';
}

function selectCategory(category) {
    selectedCategory = category;
    
    // Обновить активную карточку
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`.category-card[data-category="${category}"]`).classList.add('active');
    
    // Обновить отображение слов
    updateCategoryDisplay();
    updateWordGrid();
}

function updateCategoryDisplay() {
    let words;
    if (selectedCategory === 'все') {
        words = Object.keys(stressExamples).sort();
    } else {
        words = (wordCategories[selectedCategory] || []).sort();
    }
    
    // Фильтрация по избранным
    if (showFavoritesOnly) {
        words = words.filter(word => userStats.favoriteWords.includes(word));
    }
    
    elements.categoryWordsGrid.innerHTML = '';
    words.forEach(word => {
        const isLearned = userStats.learnedWords[word];
        const isFavorite = userStats.favoriteWords.includes(word);
        const chip = document.createElement('div');
        chip.className = `word-chip ${isLearned ? 'learned' : ''} ${isFavorite ? 'favorite' : ''}`;
        chip.style.borderColor = isLearned ? 'var(--success-color)' : (isFavorite ? 'var(--favorite-color)' : '');
        chip.innerHTML = `
            ${word}
            ${isFavorite ? '<div class="favorite-indicator">★</div>' : ''}
        `;
        chip.addEventListener('click', () => {
            elements.wordInput.value = word;
            showWordWithStress(word);
            // Переключиться на режим словаря
            document.querySelector('.mode-tab[data-mode="dictionary"]').click();
        });
        elements.categoryWordsGrid.appendChild(chip);
    });
    
    updateTotalProgress();
}

function updateTotalProgress() {
    const progress = calculateCategoryProgress('все');
    elements.totalProgress.textContent = `Прогресс: ${progress}%`;
}

// ==================== СИСТЕМА ИЗБРАННОГО ====================

function initFavoritesDisplay() {
    updateFavoritesBadge();
}

function toggleFavorite() {
    const currentWord = elements.wordInput.value.trim() || 
                       elements.stressWord.textContent.replace('Правильное ударение: ', '').replace(/<[^>]*>/g, '');
    
    if (!currentWord || !stressExamples[currentWord.toLowerCase()]) {
        return;
    }
    
    toggleFavoriteWord(currentWord.toLowerCase());
}

function toggleFavoriteInTest() {
    if (!currentTestWord) return;
    toggleFavoriteWord(currentTestWord);
}

function toggleFavoriteWord(word) {
    const wordLower = word.toLowerCase();
    const index = userStats.favoriteWords.indexOf(wordLower);
    
    if (index === -1) {
        // Добавить в избранное
        userStats.favoriteWords.push(wordLower);
        showNotification(`Слово "${wordLower}" добавлено в избранное`);
    } else {
        // Удалить из избранное
        userStats.favoriteWords.splice(index, 1);
        showNotification(`Слово "${wordLower}" удалено из избранное`);
    }
    
    userStats.favoriteWordsCount = userStats.favoriteWords.length;
    saveUserStats();
    updateFavoritesBadge();
    updateWordGrid();
    updateCategoryDisplay();
    updateProfileDisplay();
    updateFavoriteButtonStates();
    checkAchievements();
}

function updateFavoriteButtonStates() {
    // Обновить кнопку в режиме словаря
    const currentWord = elements.wordInput.value.trim() || 
                       elements.stressWord.textContent.replace('Правильное ударение: ', '').replace(/<[^>]*>/g, '');
    if (currentWord) {
        const wordLower = currentWord.toLowerCase();
        if (userStats.favoriteWords.includes(wordLower)) {
            elements.favoriteButton.classList.add('active');
            elements.favoriteButton.innerHTML = '★';
        } else {
            elements.favoriteButton.classList.remove('active');
            elements.favoriteButton.innerHTML = '☆';
        }
    }
    
    // Обновить кнопку в тесте
    if (currentTestWord) {
        const wordLower = currentTestWord.toLowerCase();
        if (userStats.favoriteWords.includes(wordLower)) {
            elements.testFavoriteButton.classList.add('active');
            elements.testFavoriteButton.innerHTML = '★';
        } else {
            elements.testFavoriteButton.classList.remove('active');
            elements.testFavoriteButton.innerHTML = '☆';
        }
    }
}

function updateFavoritesBadge() {
    const count = userStats.favoriteWords.length;
    elements.favoritesBadge.textContent = count;
    elements.favoritesCount.textContent = `Всего: ${count} слов`;
    elements.profileFavorites.textContent = count;
}

function toggleFavoritesFilter() {
    showFavoritesOnly = !showFavoritesOnly;
    elements.showFavoritesToggle.classList.toggle('active', showFavoritesOnly);
    updateWordGrid();
}

function toggleFavoritesFilterCategories() {
    showFavoritesOnly = !showFavoritesOnly;
    elements.showFavoritesToggleCategories.classList.toggle('active', showFavoritesOnly);
    updateCategoryDisplay();
}

function updateFavoritesDisplay() {
    const favorites = userStats.favoriteWords;
    elements.favoritesGrid.innerHTML = '';
    
    if (favorites.length === 0) {
        elements.emptyFavoritesMessage.style.display = 'block';
        elements.favoritesGrid.style.display = 'none';
        return;
    }
    
    elements.emptyFavoritesMessage.style.display = 'none';
    elements.favoritesGrid.style.display = 'grid';
    
    favorites.forEach(word => {
        const isLearned = userStats.learnedWords[word];
        const chip = document.createElement('div');
        chip.className = `word-chip favorite ${isLearned ? 'learned' : ''}`;
        chip.innerHTML = `
            ${word}
            <div class="favorite-indicator">★</div>
        `;
        chip.addEventListener('click', () => {
            elements.wordInput.value = word;
            showWordWithStress(word);
            // Переключиться на режим словаря
            document.querySelector('.mode-tab[data-mode="dictionary"]').click();
        });
        elements.favoritesGrid.appendChild(chip);
    });
}

function startFavoritesTest() {
    if (userStats.favoriteWords.length === 0) {
        alert('У вас нет избранных слов. Добавьте слова в избранное, чтобы тренировать их.');
        return;
    }
    
    // Переключиться на тестовый режим
    document.querySelector('.mode-tab[data-mode="test"]').click();
    
    // Установить настройки теста для избранных
    document.querySelector('.test-mode-btn[data-test-category="favorites"]').click();
    
    // Начать тест
    setTimeout(() => {
        elements.startTestBtn.click();
    }, 100);
}

// ==================== ПРАВИЛА ====================

function initRules() {
    updateRulesDisplay();
}

function updateRulesDisplay() {
    elements.rulesList.innerHTML = '';
    
    rules.forEach(rule => {
        const ruleCard = document.createElement('div');
        ruleCard.className = 'rule-card';
        ruleCard.innerHTML = `
            <div class="rule-title">
                <span class="rule-icon">📚</span>
                <span>${rule.title}</span>
            </div>
            <div class="rule-content">${rule.content}</div>
        `;
        elements.rulesList.appendChild(ruleCard);
    });
    
    elements.rulesCount.textContent = `Всего правил: ${rules.length}`;
    elements.rulesBadge.textContent = rules.length;
}

// ==================== ОСНОВНЫЕ ФУНКЦИИ ====================

function formatStressWord(word) {
    const wordLower = word.toLowerCase();
    if (!stressExamples[wordLower]) return word;
    
    const correct = stressExamples[wordLower].correct;
    return correct.replace(/([А-ЯЁ])/g, '<span class="stress-letter">$1</span>');
}

function getExample(word) {
    const wordLower = word.toLowerCase();
    return stressExamples[wordLower]?.example || `Нет примера для слова "${word}".`;
}

function showWordWithStress(word) {
    const wordLower = word.toLowerCase();
    if (stressExamples[wordLower]) {
        elements.stressWord.innerHTML = `Правильное ударение: ${formatStressWord(word)}`;
        elements.exampleText.textContent = stressExamples[wordLower].example;
        // Только отмечаем как изученное, но не даем опыт
        if (!userStats.learnedWords[wordLower]) {
            userStats.learnedWords[wordLower] = {
                learned: new Date().toISOString(),
                correct: 0,
                total: 0
            };
            userStats.wordsLearned = Object.keys(userStats.learnedWords).length;
            updateBadges();
            checkAchievements();
            saveUserStats();
        }
        updateFavoriteButtonStates();
    } else {
        elements.stressWord.textContent = `Слово "${word}" не найдено в словаре`;
        elements.exampleText.textContent = 'Попробуйте другое слово!';
        elements.favoriteButton.classList.remove('active');
        elements.favoriteButton.innerHTML = '☆';
    }
}

function onSubmit() {
    const userWord = elements.wordInput.value.trim();
    if (userWord) {
        showWordWithStress(userWord);
        elements.wordInput.value = '';
    }
}

function onWordClick(word) {
    elements.wordInput.value = word;
    showWordWithStress(word);
}

// ==================== ТЕСТОВЫЙ РЕЖИМ ====================

function generateTestQuestions(count) {
    let allWords;
    
    if (currentTestCategory === 'favorites') {
        allWords = userStats.favoriteWords;
        if (allWords.length === 0) {
            alert('У вас нет избранных слов. Добавьте слова в избранное, чтобы тренировать их.');
            return [];
        }
    } else if (currentTestCategory === 'custom') {
        allWords = Object.keys(userStats.customWords);
        if (allWords.length === 0) {
            alert('У вас нет добавленных слов. Добавьте свои слова в словарь.');
            return [];
        }
    } else if (selectedCategory === 'все') {
        allWords = Object.keys(stressExamples);
    } else {
        const standardInCategory = (wordCategories[selectedCategory] || []);
        const customInCategory = Object.keys(userStats.customWords).filter(word => 
            stressExamples[word] && stressExamples[word].category === selectedCategory
        );
        allWords = [...standardInCategory, ...customInCategory];
    }
    
    const selected = [];
    const used = new Set();
    const maxQuestions = count === 0 ? allWords.length : Math.min(count, allWords.length);
    
    while (selected.length < maxQuestions) {
        const idx = Math.floor(Math.random() * allWords.length);
        const word = allWords[idx];
        if (!used.has(word)) {
            used.add(word);
            selected.push(word);
        }
    }
    
    return selected;
}

function createStressOptions(word) {
    const options = [];
    const correct = stressExamples[word].correct;
    options.push(correct);
    
    const wordLower = word.toLowerCase();
    const vowelPositions = [];
    for (let i = 0; i < wordLower.length; i++) {
        if (vowels.includes(wordLower[i])) {
            vowelPositions.push(i);
        }
    }
    
    // Создаем варианты только для доступных гласных
    for (let pos of vowelPositions) {
        if (options.length >= Math.min(4, vowelPositions.length)) break;
        const variant = createStressVariant(wordLower, pos);
        if (variant !== correct && !options.includes(variant)) {
            options.push(variant);
        }
    }
    
    // Простое перемешивание
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    return options;
}

function createStressVariant(word, stressPosition) {
    const chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
        if (vowels.includes(chars[i])) {
            chars[i] = (i === stressPosition) ? chars[i].toUpperCase() : chars[i].toLowerCase();
        }
    }
    return chars.join('');
}

function formatStressOption(option) {
    return option.replace(/([А-ЯЁ])/g, '<span style="color: #e74c3c; font-weight: bold;">$1</span>');
}

function startTest() {
    testWords = generateTestQuestions(testModeQuestions);
    if (testWords.length === 0) return;
    
    currentTestWordIndex = 0;
    correctAnswersCount = 0;
    testResults = [];
    userAnswers = {};
    testInProgress = true;
    answerSubmitted = false;
    
    const totalQ = testModeQuestions === 0 ? testWords.length : testModeQuestions;
    elements.totalQuestions.textContent = totalQ === 0 ? '∞' : totalQ;
    elements.correctCount.textContent = '0';
    
    elements.testSettings.style.display = 'none';
    elements.testControls.style.display = 'flex';
    elements.testQuestion.style.display = 'block';
    elements.testFeedback.classList.remove('show');
    elements.testResultsSummary.classList.remove('show');
    elements.testNavigation.style.display = 'flex';
    
    showTestQuestion();
}

function showTestQuestion() {
    if (currentTestWordIndex >= testWords.length && testModeQuestions !== 0) {
        finishTest();
        return;
    }
    
    currentTestWord = testWords[currentTestWordIndex];
    const options = createStressOptions(currentTestWord);
    
    elements.currentQuestion.textContent = currentTestWordIndex + 1;
    elements.testWord.textContent = currentTestWord;
    elements.testOptions.innerHTML = '';
    selectedOption = null;
    
    // Восстанавливаем сохраненный ответ, если есть
    const savedAnswer = userAnswers[currentTestWordIndex];
    const questionAlreadyAnswered = savedAnswer && savedAnswer.submitted;
    
    // Определяем, был ли уже дан ответ на этот вопрос
    answerSubmitted = questionAlreadyAnswered;
    
    // Определяем, есть ли длинные слова
    const hasLongWords = options.some(opt => opt.length > 12);
    
    // Настраиваем отображение в зависимости от длины слов и размера экрана
    if (hasLongWords || window.innerWidth <= 768) {
        elements.testOptions.style.display = 'flex';
        elements.testOptions.style.flexDirection = 'column';
        elements.testOptions.style.gridTemplateColumns = 'none';
    } else {
        elements.testOptions.style.display = 'grid';
        elements.testOptions.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
    
    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'test-option';
        
        // Добавляем класс для длинных слов
        if (option.length > 12) {
            optionElement.classList.add('long-word');
        }
        
        optionElement.innerHTML = formatStressOption(option);
        
        if (questionAlreadyAnswered) {
            optionElement.classList.add('disabled');
            const correctAnswer = stressExamples[currentTestWord].correct;
            if (option === correctAnswer) {
                optionElement.classList.add('correct');
            } else if (savedAnswer.option === option && !savedAnswer.isCorrect) {
                optionElement.classList.add('incorrect');
            }
            if (savedAnswer.option === option) {
                optionElement.classList.add('selected');
                selectedOption = savedAnswer.option;
            }
        } else if (savedAnswer && savedAnswer.option === option) {
            optionElement.classList.add('selected');
            selectedOption = savedAnswer.option;
        }
        
        if (!questionAlreadyAnswered) {
            optionElement.addEventListener('click', () => {
                if (!answerSubmitted && !optionElement.classList.contains('disabled')) {
                    document.querySelectorAll('.test-option').forEach(el => {
                        el.classList.remove('selected');
                    });
                    optionElement.classList.add('selected');
                    selectedOption = option;
                    elements.submitAnswerBtn.style.display = 'inline-block';
                    
                    userAnswers[currentTestWordIndex] = {
                        option: option,
                        submitted: false
                    };
                }
            });
        }
        
        elements.testOptions.appendChild(optionElement);
    });
    
    // Показываем кнопку "Проверить" только если ответ не отправлен
    elements.submitAnswerBtn.style.display = (selectedOption && !questionAlreadyAnswered) ? 'inline-block' : 'none';
    
    // Обновляем состояние кнопок навигации
    updateNavigationButtons();
    
    elements.testFeedback.classList.remove('show');
    
    if (questionAlreadyAnswered) {
        showAnswerFeedback(savedAnswer);
    }
    
    // Обновить кнопку избранного
    updateFavoriteButtonStates();
}

function showAnswerFeedback(savedAnswer) {
    const word = testWords[currentTestWordIndex];
    const correctAnswer = stressExamples[word].correct;
    const isCorrect = savedAnswer.isCorrect;
    
    answerSubmitted = true;
    
    if (isCorrect) {
        elements.testResult.innerHTML = '✓ <span class="correct-answer">Правильно!</span>';
    } else {
        elements.testResult.innerHTML = `✗ <span class="wrong-answer">Неправильно.</span> Правильно: <span class="correct-answer">${formatStressOption(correctAnswer)}</span>`;
    }
    elements.testExample.textContent = stressExamples[word].example;
    elements.testFeedback.classList.add('show');
    
    elements.submitAnswerBtn.style.display = 'none';
}

function updateNavigationButtons() {
    const isFirstQuestion = currentTestWordIndex === 0;
    const isLastQuestion = currentTestWordIndex === testWords.length - 1;
    const isInfiniteMode = testModeQuestions === 0;
    const currentAnswer = userAnswers[currentTestWordIndex];
    const isCurrentAnswered = currentAnswer && currentAnswer.submitted;
    
    elements.prevQuestionBtn.disabled = isFirstQuestion;
    
    // В бесконечном режиме тоже требуем ответ перед переходом
    elements.nextQuestionBtn.disabled = !isCurrentAnswered;
    elements.nextQuestionBtn.classList.toggle('disabled', !isCurrentAnswered);
    
    if (isInfiniteMode) {
        elements.nextQuestionBtn.textContent = 'Следующий →';
    } else {
        elements.nextQuestionBtn.textContent = isLastQuestion ? 'Узнать результаты' : 'Следующий →';
    }
}

function checkAnswer() {
    if (!selectedOption || answerSubmitted) return;
    
    answerSubmitted = true;
    const word = testWords[currentTestWordIndex];
    const correctAnswer = stressExamples[word].correct;
    const isCorrect = selectedOption === correctAnswer;
    
    // Проверяем, не был ли уже дан ответ на этот вопрос
    const existingAnswer = userAnswers[currentTestWordIndex];
    if (existingAnswer && existingAnswer.submitted) {
        return; // Уже отвечали на этот вопрос
    }
    
    // Сохраняем результат проверки
    userAnswers[currentTestWordIndex] = {
        option: selectedOption,
        submitted: true,
        isCorrect: isCorrect
    };
    
    testResults.push({
        word: word,
        userAnswer: selectedOption,
        correctAnswer: correctAnswer,
        correct: isCorrect,
        example: stressExamples[word].example
    });
    
    // Обновляем статистику пользователя
    userStats.totalAnswers++;
    if (isCorrect) {
        correctAnswersCount++;
        userStats.correctAnswers++;
        elements.correctCount.textContent = correctAnswersCount;
        
        // Отмечаем слово как изученное
        if (!userStats.learnedWords[word]) {
            userStats.learnedWords[word] = {
                learned: new Date().toISOString(),
                correct: 1,
                total: 1
            };
            userStats.wordsLearned = Object.keys(userStats.learnedWords).length;
        } else {
            userStats.learnedWords[word].correct++;
            userStats.learnedWords[word].total++;
        }
    } else {
        if (userStats.learnedWords[word]) {
            userStats.learnedWords[word].total++;
        }
    }
    
    // Блокируем все варианты после ответа
    document.querySelectorAll('.test-option').forEach(el => {
        el.classList.add('disabled');
        const text = el.textContent || el.innerText;
        if (text === correctAnswer) {
            el.classList.add('correct');
        } else if (text === selectedOption && !isCorrect) {
            el.classList.add('incorrect');
        }
    });
    
    // Включаем кнопку "Следующий" после ответа
    elements.nextQuestionBtn.disabled = false;
    elements.nextQuestionBtn.classList.remove('disabled');
    
    // Обратная связь
    if (isCorrect) {
        elements.testResult.innerHTML = '✓ <span class="correct-answer">Правильно!</span>';
    } else {
        elements.testResult.innerHTML = `✗ <span class="wrong-answer">Неправильно.</span> Правильно: <span class="correct-answer">${formatStressOption(correctAnswer)}</span>`;
    }
    elements.testExample.textContent = stressExamples[word].example;
    elements.testFeedback.classList.add('show');
    
    elements.submitAnswerBtn.style.display = 'none';
    updateNavigationButtons();
    saveUserStats();
    updateProfileDisplay();
    updateBadges();
    checkAchievements();
}

function goToPreviousQuestion() {
    if (currentTestWordIndex > 0) {
        currentTestWordIndex--;
        showTestQuestion();
    }
}

function goToNextQuestion() {
    const isInfiniteMode = testModeQuestions === 0;
    const currentAnswer = userAnswers[currentTestWordIndex];
    const isCurrentAnswered = currentAnswer && currentAnswer.submitted;
    
    // Проверяем, был ли дан ответ на текущий вопрос
    if (!isCurrentAnswered) {
        alert('Сначала выберите вариант ответа и нажмите "Проверить"');
        return;
    }
    
    if (isInfiniteMode) {
        // В бесконечном режиме просто переходим к следующему вопросу
        currentTestWordIndex++;
        showTestQuestion();
    } else {
        const isLastQuestion = currentTestWordIndex === testWords.length - 1;
        if (isLastQuestion) {
            finishTest();
        } else {
            currentTestWordIndex++;
            showTestQuestion();
        }
    }
}

function finishTest() {
    testInProgress = false;
    elements.testQuestion.style.display = 'none';
    elements.testControls.style.display = 'none';
    elements.testNavigation.style.display = 'none';
    elements.testFeedback.classList.remove('show');
    
    // Используем только уникальные ответы (без дубликатов при возврате к вопросам)
    const uniqueResults = [];
    const seenWords = new Set();
    
    for (const result of testResults) {
        if (!seenWords.has(result.word)) {
            seenWords.add(result.word);
            uniqueResults.push(result);
        }
    }
    
    const total = uniqueResults.length;
    const correct = uniqueResults.filter(r => r.correct).length;
    const incorrect = total - correct;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    // Обновляем статистику пользователя
    userStats.testsCompleted++;
    if (score === 100) {
        userStats.perfectTests++;
    }
    
    elements.finalScore.textContent = `${score}%`;
    elements.correctAnswers.textContent = correct;
    elements.incorrectAnswers.textContent = incorrect;
    
    elements.resultsWords.innerHTML = '';
    uniqueResults.forEach(result => {
        const div = document.createElement('div');
        div.className = `results-word ${result.correct ? 'correct' : 'incorrect'}`;
        div.innerHTML = `
            <div>
                <strong>${result.word}</strong>
                ${!result.correct ? `<br><small>Вы: ${result.userAnswer}<br>Правильно: ${result.correctAnswer}</small>` : ''}
            </div>
            <div class="word-result">${result.correct ? '✓' : '✗'}</div>
        `;
        elements.resultsWords.appendChild(div);
    });
    
    elements.testResultsSummary.classList.add('show');
    
    // Добавляем опыт за завершение теста
    const expGained = 10 + Math.floor(score / 10);
    addExperience(expGained);
    
    showNotification(`Тест завершен! Получено ${expGained} опыта.`);
    
    checkAchievements();
    updateBadges();
    saveUserStats();
}

function endTest() {
    if (confirm('Завершить тест и посмотреть результаты?')) {
        finishTest();
    }
}

function restartTest() {
    // Перезапускаем тот же самый тест с теми же настройками
    elements.testResultsSummary.classList.remove('show');
    elements.testSettings.style.display = 'none';
    elements.testControls.style.display = 'flex';
    elements.testQuestion.style.display = 'block';
    elements.testFeedback.classList.remove('show');
    elements.testResultsSummary.classList.remove('show');
    elements.testNavigation.style.display = 'flex';
    
    currentTestWordIndex = 0;
    correctAnswersCount = 0;
    testResults = [];
    userAnswers = {};
    testInProgress = true;
    answerSubmitted = false;
    
    elements.correctCount.textContent = '0';
    
    showTestQuestion();
}

function newTest() {
    // Возвращаемся к настройкам теста
    elements.testResultsSummary.classList.remove('show');
    elements.testSettings.style.display = 'block';
}

function goToDictionary() {
    // Переходим в словарь
    document.querySelector('.mode-tab[data-mode="dictionary"]').click();
}

// ==================== ИНИЦИАЛИЗАЦИЯ СЕТКИ СЛОВ ====================

function initWordGrid() {
    updateWordGrid();
}

function updateWordGrid() {
    let words;
    if (selectedCategory === 'все') {
        words = Object.keys(stressExamples).sort();
    } else {
        words = (wordCategories[selectedCategory] || []).sort();
    }
    
    // Фильтрация по избранным
    if (showFavoritesOnly) {
        words = words.filter(word => userStats.favoriteWords.includes(word));
    }
    
    elements.wordGrid.innerHTML = '';
    words.forEach(word => {
        const isLearned = userStats.learnedWords[word];
        const isFavorite = userStats.favoriteWords.includes(word);
        const chip = document.createElement('div');
        chip.className = `word-chip ${isLearned ? 'learned' : ''} ${isFavorite ? 'favorite' : ''}`;
        chip.style.borderColor = isLearned ? 'var(--success-color)' : (isFavorite ? 'var(--favorite-color)' : '');
        chip.innerHTML = `
            ${word}
            ${isFavorite ? '<div class="favorite-indicator">★</div>' : ''}
        `;
        chip.addEventListener('click', () => onWordClick(word));
        elements.wordGrid.appendChild(chip);
    });
}

function updateBadges() {
    elements.dictionaryBadge.textContent = userStats.wordsLearned;
    elements.testBadge.textContent = userStats.testsCompleted;
    elements.categoriesBadge.textContent = Object.keys(wordCategories).length;
    elements.favoritesBadge.textContent = userStats.favoriteWordsCount;
    elements.customWordsBadge.textContent = userStats.customWordsAdded;
    elements.rulesBadge.textContent = rules.length;
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showProfileModal() {
    elements.profileModal.classList.add('active');
    checkAchievements();
}

function closeProfileModal() {
    elements.profileModal.classList.remove('active');
}

function resetProgress() {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
        userStats = {
            username: 'Гость',
            level: 1,
            exp: 0,
            wordsLearned: 0,
            testsCompleted: 0,
            correctAnswers: 0,
            totalAnswers: 0,
            streak: 0,
            lastLogin: new Date().toISOString(),
            learnedWords: {},
            unlockedAchievements: [],
            perfectTests: 0,
            firstLogin: new Date().toISOString(),
            favoriteWords: [],
            favoriteWordsCount: 0,
            rulesLearned: 0,
            customWordsAdded: 0,
            customWords: {}
        };
        saveUserStats();
        updateProfileDisplay();
        initAchievements();
        updateWordGrid();
        updateCategoryDisplay();
        updateBadges();
        updateFavoritesDisplay();
        updateCustomWordsDisplay();
        showNotification('Прогресс сброшен!');
    }
}

// Обработчик изменения размера окна для адаптивности
window.addEventListener('resize', () => {
    if (testInProgress && elements.testOptions.children.length > 0) {
        // Пересчитываем отображение при изменении размера окна
        const hasLongWords = Array.from(elements.testOptions.children)
            .some(el => el.textContent.length > 12 || el.classList.contains('long-word'));
        
        if (hasLongWords || window.innerWidth <= 768) {
            elements.testOptions.style.display = 'flex';
            elements.testOptions.style.flexDirection = 'column';
            elements.testOptions.style.gridTemplateColumns = 'none';
        } else {
            elements.testOptions.style.display = 'grid';
            elements.testOptions.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    }
});

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);
