export async function sendEmailViaSendGrid(to: string, subject: string, text: string) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.FROM_EMAIL ?? 'no-reply@example.com';

    if (apiKey) {
        try {
            await fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    personalizations: [{ to: [{ email: to }] }],
                    from: { email: from },
                    subject,
                    content: [{ type: 'text/plain', value: text }]
                })
            });
        } catch (err) {
            console.error('SendGrid send error:', err);
        }
        return;
    }

    // Development fallback: print to server console
    console.log(`Email fallback -> to: ${to}\nsubject: ${subject}\n${text}`);
}
