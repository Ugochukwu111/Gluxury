
export function formatMoney(ammout){
  if (ammout == null || isNaN(ammout)) {
    return "₦0"
  }
  return  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(ammout)
}