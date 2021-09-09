import ReportNavigation from "./ReportNavigation";

const ReportLayout = (props) => {
  return (
    <div>
      <ReportNavigation/>
      {props.children}
    </div>
  );
}

export default ReportLayout;
