import {useDispatch} from "react-redux";
import {fetchData, setReportType} from "../store/report-actions";
import Card from "../ui/Card";
import classes from "./ReportNavigation.module.css";

const ReportNavigation = (props) => {
  const dispatch = useDispatch();

  const topThreeHandler = () => {
    dispatch(setReportType('topThree'));
  }
  const topTenHandler = () => {
    dispatch(setReportType('topTen'));
  }
  const allHandler = () => {
    dispatch(setReportType('all'));
  }
  const categoryHandler = () => {
    props.onShowCategory();
  }
  const refreshHandler = () => {
    dispatch(fetchData());
  }

  return (
    <Card className={classes.navbar}>
      <button onClick={refreshHandler}>refresh</button>
      <button onClick={allHandler}> All Songs</button>
      <button onClick={topTenHandler}> Top Ten</button>
      <button onClick={topThreeHandler}> Top Three</button>
      <button onClick={categoryHandler}> Category Report</button>
    </Card>
  );
}


export default ReportNavigation;
