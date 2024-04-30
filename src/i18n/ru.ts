import type { TranslatedText } from './_';

const ru: TranslatedText = {
    locale: {
        flag: '🇷🇺',
        name: 'Russian | Русский',
    },
    selectVideo: {
        title: 'Выбрать источник видео',
        link: {
            title: 'Онлайн ссылка:',
            insertExample: 'вставить пример',
            description: 'Вставь ссылку на {type}Dailymotion{/type}, {type}YouTube{/type}, {type}Vimeo{/type}, {type}HLS{/type} плейлист, {type}видео{/type} или {type}аудио{/type} файл. Поле ввода синхронизованно со всеми в этой комнате.',
            hintNotWorking: 'Если фильм не грузится, убедись, что введена {u}прямая{/u} ссылка на видео.',
            hintEmpty: 'Не знаешь, как получить прямую ссылку на видео?',
            hintInvalid: 'Неверная ссылка',
            help: 'Это просто, {link}читай здесь{/link}!'
        },
        file: {
            title: 'Файл на компьютере:',
            description: 'Вы уже скачали фильм!? Выберите видеофайл',
            selectAnother: 'Выбрать другой видео-файл',
            select: 'Выбрать видео-файл',
            hint: 'Не знаешь как скачать видео с сайта?',
            help: 'Это просто, {link}смотри здесь{/link}!',
            selectAnotherStream: 'Заменить стрим своим локальным файлом',
            streamingPending: 'Подготовка к стримингу...',
            streamingConfirmation: 'Хотите ли вы стримить эту копию видео другим пользователям в комнате или хотите воспроизвести её только для себя?\n\nНажмите "Ok", чтобы транслировать видео другим; нажмите "Cancel", чтобы воспроизвести видео только для себя',
            streamingFailed: 'Ошибка стриминга',
        },
    },
    invite: {
        title: 'Пригласить в эту комнату',
        description: 'Поделись ссылкой с тем, вместе с кем хочешь посмотреть фильм',
        copyLink: 'Нажми на ссылку, чтобы скопировать её',
        clickToShare: 'Нажми, чтобы поделиться ссылкой',
        clickToCopy: 'Нажми, чтобы скопировать ссылку',
        linkHasBeenCopied: 'Ссылка скопирована в буфер обмена',
        clickToShareHint: 'Нажми на ссылку, чтобы поделиться ею. Или {link}нажми здесь{/link} чтобы скопировать её',
        joinPromt: 'Вставь ссылку или идентификатор комнаты, к которой хочешь присоединиться:',
    },
    room: {
        generateNewRoom: {
            button: 'Создать новую комнату',
            confirmation: 'Ты перейдёшь в новую пустую комнату, а текущая конфигурация останется в текущей комнате и не будет в неё скопирована.\n\nТы уверен, что хочешь продолжить?',
        },
        joinAnotherRoom: 'Войти в другую комнату',
    },
    player: {
        placeholder: 'Вставь ссылку на видео или выбери файл, чтобы начать воспроизведение фильма',
        torrentNotSupported: 'Потоковая передача не поддерживается в этом браузере, так как он не поддерживает ServiceWorker. Пожалуйста, выберите локальную копию видео',
        isHostActive: 'Это занимает слишком много времени... Пожалуйста, выберите локальную копию видео, либо проверьте, что стример находится в сети и не обновлял страницу'
    },
    poweredBy: 'Сделано с помощью',
    or: 'или',
    you: 'вы',
    users: {
        nameEdit: 'Нажми, чтобы изменить никнейм',
        nameEditPromt: 'Введите свое имя (максимум {maxLength} символов) или оставьте поле ввода пустым, выбрать случайное имя',
        online: 'онлайн',
    },
    error: {
        description: 'Произошла ошибка',
        reload: 'Перезапустить приложение',
    },
    noInternet: 'Нет интернет соединения',
    downloadSpeed: 'Скачивание: {speed}',
    uploadSpeed: 'Отдача: {speed}',
    dontRefresh: 'Вы раздаёте видео. Не перезагружайте страницу и не закрывайте вкладку браузера',
    peers: 'Пиры: {peers}',
    feedback: {
        link: 'https://forms.gle/tXzRyTQimJkHXNuS7',
        linkText: 'Возникли проблемы? Есть идеи? Оставьте обратную свзять {link}тут{/link}', 
    },
};

export default ru;
