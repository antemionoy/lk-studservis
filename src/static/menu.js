export default [
    {
        name: 'Главная страницы',
        icon: 'home',
        href: '/home/',
    },
    {
        name: 'Финансы',
        icon: 'home',
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
        icon: 'home',
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
        icon: 'home',
        href: '/promo/',
    },
    {
        name: 'Новости и Блог',
        icon: 'home',
        href: '/news/',
    },
    {
        name: 'Техподдержка',
        icon: 'home',
        href: '/support/',
    },
    {
        name: 'Рефералы',
        icon: 'refs',
        href: '/refs/',
    },
]