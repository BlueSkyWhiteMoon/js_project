let data = [
    {
        name: 'Til',
        age: '30'
    },
    {
        name: 'Sam',
        age: '31'
    },
    {
        name: 'Jaja',
        age: '32'
    },
    {
        name: 'lalal',
        age: '33'
    },
    {
        name: 'banana',
        age: '34'
    },
    {
        name: 'ihata',
        age: '35'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>';

});

info.innerHTML = details.join('\n');