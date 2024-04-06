import BigChartRow from "../components/overviewPage/BigChartRow";
import TransactionRow from "../components/overviewPage/TransactionRow";

const Overview = () => {
  return (
    <div>
      {/* Transaction rows */}
      <TransactionRow />
      <BigChartRow />
    </div>
  );
};

export default Overview;
