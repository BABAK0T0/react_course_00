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
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const format = (num) => {
    return `$${num} billions`;
}

export const tableRows = months.map((month, idx) => ({
    month,
    phones: format(chartData[0].data[idx]),
    services: format(chartData[1].data[idx]),
    tablets: format(chartData[2].data[idx]),
    laptops: format(chartData[3].data[idx])
}));

export const tableColumns = [
    {
        width: 240,
        label: 'Month',
        dataKey: 'month'
    },
    {
        width: 240,
        label: 'Phones',
        dataKey: 'phones'
    },
    {
        width: 240,
        label: 'Services',
        dataKey: 'services'
    },
    {
        width: 240,
        label: 'Tablets',
        dataKey: 'tablets'
    },
    {
        width: 240,
        label: 'Laptops',
        dataKey: 'laptops'
    },
];