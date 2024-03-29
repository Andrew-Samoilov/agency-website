import { FormData } from '@/components/form/form'

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
    // console.log(`send-email`,data);

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            // console.log(response);
            alert(response.message);
     
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        });
}
