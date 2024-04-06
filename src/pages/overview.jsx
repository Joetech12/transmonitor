import BigChartRow from "../components/overviewPage/BigChartRow";
import PaymentRow from "../components/overviewPage/PaymentRow";
import TransactionRow from "../components/overviewPage/TransactionRow";

const Overview = () => {
  return (
    <div>
      {/* Transaction rows */}
      <TransactionRow />
      <BigChartRow />

      <PaymentRow />
    </div>
  );
};

export default Overview;
