const CURRENCY_FORMAT = new Intl.NumberFormat('tr-TR', {
    currency: 'TRY',
    style: 'currency',
    minimumFractionDigits:2
})


export function formatCurrency(number: number) : string {
    return CURRENCY_FORMAT.format(number)
}