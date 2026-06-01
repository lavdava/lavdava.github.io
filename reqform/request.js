document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const grade = urlParams.get('grade');
    const typeValue = urlParams.get('type');
    const date = urlParams.get('date');
    const time = urlParams.get('time');

    const typeMapping = {
        '1': 'Counselor',
        '2': 'Admin',
        '3': 'Teacher',
        '4': 'Security'
    };
    const requestType = typeMapping[typeValue];
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-grade').textContent = grade;
    document.getElementById('display-type').textContent = requestType;
    document.getElementById('display-date').textContent = date;
    document.getElementById('display-time').textContent = time;
});
