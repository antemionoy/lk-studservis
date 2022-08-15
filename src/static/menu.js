export default [
    {
        name: 'Главная страницы',
        icon: 'home',
        href: '/home/',
    },
    {
        name: 'Финансы',
        icon: 'card',
        href: '/finance/',
        subItems: [
            {
                name: 'Вывести деньги',
                href: '/finance/'
            },
            {
                name: 'История транзакций',
                href: '/finance/'
            }
        ]
    },
    {
        name: 'Статистика',
        icon: 'stats',
        href: '/stats/',
        subItems: [
            {
                name: 'Общая статистика',
                href: '/stats/'
            },
            {
                name: 'Статистика заказов',
                href: '/stats/'
            }
        ]
    },
    {
        name: 'Промоматериалы',
        icon: 'materials',
        href: '/promo/',
    },
    {
        name: 'Новости и Блог',
        icon: 'news',
        href: '/news/',
    },
    {
        name: 'Техподдержка',
        icon: 'chat',
        href: '/support/',
    },
    {
        name: 'Рефералы',
        icon: 'refs',
        href: '/refs/',
    },
]