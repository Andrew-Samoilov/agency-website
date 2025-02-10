import { FormData } from './form';

export function sendClickup(data: FormData) {
    const apiEndpoint = '/api/clickup';
    const description =
        `📩 Нове повідомлення з сайту\n\n` +
        `Ім'я: ${data.name}\n` +
        `Email: ${data.email || 'Не вказано'}\n` +
        `Тема: ${data.subj ?? 'Не вказано'}\n\n` +
        `Повідомлення:\n${data.message}\n\n`;
    const currentDate = new Date().toLocaleString('uk-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `Message from site (${currentDate})`,
            description: description,
        }),
    })
        .then((res) => res.json())
        .then((response) => {
            // console.log('ClickUp response:', response);
            alert(response.message || 'Message send!');
        })
        .catch((err) => {
            console.error('ClickUp error:', err);
            alert(`Error sending messag ${err}`);
        });
}
