//url /sign-in/
//method post
const signIn = {
    email: 'string',
    password: 'string',
}

// url /sign-up/
//method post
const signUp = {
    name: 'string',
    email: 'string',
    sourses: 'string', // источник трафика
    phone: 'string',
    telegramm: 'string',
    password: 'string'
}

//url /news/ && /news/{code}
//method get
const news = {
    date: 'string',
    name: 'string',
    url: 'string', // Детальная страница
    short_text: 'string',
    popular: 'bool',
    image: 'string',
}


//url /refs/ 
//method get
const refs = {
    refs: {
        date: 'string',
        name: 'string',
        income: 'number',
        turnover: 'number'
    },
    levels: {
        level: 'number',
        reward: 'number',
        total: 'number',
        turnover: 'number',
        color: 'string'
    }
}

//url /profile/ 
//method post && get
const profile = {
    main: {
        name: 'string',
        email: 'string',
        phone: 'string'
    },
    contacts: {
        skype: 'string',
        telegram: 'string',
        vk: 'string',
        site: 'string'
    },
    passwords: {
        old: 'string',
        new: 'string',
        repeat: 'string'
    }
}

// /url/ = all
// method post
const forms = {
    name: 'string',
    phone: 'string',
}

// url /stats-order/
// method get
// массив объектов
const statsOrder = [
    {
        content: {
            title: 'string',
            options: 'bool'
        },
        align: 'string', // left or right
    }
]

// url /history/
// method get
// массив объектов
const history = [
    {
        content: {
            title: 'string',
            options: 'bool'
        },
        align: 'string', // left or right
    }
]