export const months = [
    'Janeiro',
    'Fervereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

export const formatDate = date => {
    let currentDate = new Date(date);

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    return `${currentDay} de ${months[currentMonth]} de ${currentYear}`;
}