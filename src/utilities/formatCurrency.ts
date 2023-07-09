const CURRENCY_FORMAT = new Intl.NumberFormat('tr-TR', {
    currency: 'TRY',
    style: 'currency',
    minimumFractionDigits: 2
})


export function formatCurrency(number: number): string {
    return CURRENCY_FORMAT.format(number)
}

export function formatFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatDate(timeNumber: number): string {
    const date = new Date(timeNumber * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function hideSecret(secret: string): string {
    return secret.slice(0, -6).padEnd(secret.length, "*");
}

export function hideSecretStart(secret: string): string {
    const first6digits = secret.slice(20)
    return first6digits.padStart(secret.length, "*");
}