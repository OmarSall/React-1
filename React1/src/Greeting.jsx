export const Greeting = () => {
    const currentDate = new Date();
    const dayMonthHourSecond = currentDate.toLocaleDateString("en-US", {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });
    return (
        <p className='greeting'>Hello! Today is {dayMonthHourSecond}</p>
    );
};