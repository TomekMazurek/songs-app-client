import {useDispatch} from "react-redux";
import {setReportType} from "../store/report-actions";

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
  const categoryHandler=()=>{
    props.onShowCategory();
  }

  return (
    <nav>
      <button onClick={allHandler}> All Songs</button>
      <button onClick={topTenHandler}> Top Ten</button>
      <button onClick={topThreeHandler}> Top Three</button>
      <button onClick={categoryHandler}> Category Report</button>
    </nav>
  );
}


export default ReportNavigation;
