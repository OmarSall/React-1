import styles from './Greeting.module.css';

export const Greeting = ( {name} ) => {
    const currentDate = new Date();
    const dayMonthHourSecond = currentDate.toLocaleDateString("en-US", {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });
    return (
        <p className={styles.greetingParagraph}>
            Hello {name}! Today is {dayMonthHourSecond}
        </p>
    );
};