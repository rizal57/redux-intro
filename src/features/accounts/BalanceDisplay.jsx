import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((state) => state.account);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
