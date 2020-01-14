const generateData = (count, start, growth) => {
    let data = [];

    for (let i = 0; i < count; i++) {
        data.push(Math.floor(start + Math.random() * i * growth));
    }

    return data;
}

export const chartData = [
    {
        name: 'Phones',
        data: generateData(12, 30, 5),
        color: '#C1FAD7'

    }, {
        name: 'Services',
        data: generateData(12, 25, 3),
        color: '#1DDA65'
    }, {
        name: 'Tablets',
        data: generateData(12, 35, 7),
        color: '#5CF396'
    },
    {
        name: 'Laptops',
        data: generateData(12, 32, 6),
        color: '#149947'
    }
]