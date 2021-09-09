import {Fragment, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReportNavigation from "../layout/ReportNavigation";
import SongList from "../songs/SongList";
import {fetchData, setCategory, setReportType} from "../store/report-actions";
import Modal from "../ui/Modal";

const ReportsPage = () => {
  const reportType = useSelector(state => state.reports.type);
  const songs = useSelector(state => state.reports.songs);
  const activeCategory =useSelector(state=>state.reports.category);
  const categories = useSelector(state => state.songs.categories);
  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);

  const categoryInputRef = useRef();
  const closeCategoriesHandler = () => {
    setShowCategories(false);
  }
  const showCategoriesHandler = () => {
    setShowCategories(true);
  }
  const showCategoryReportHandler = () => {
    dispatch(setCategory(categoryInputRef.current.value));
    dispatch(setReportType('category'));
    setShowCategories(false);
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [reportType,activeCategory]);

  return (
    <Fragment>
      <ReportNavigation onShowCategory={showCategoriesHandler}/>
      {showCategories && <Modal onClose={closeCategoriesHandler}>
        <div>
          <label> Select category </label>
          <select ref={categoryInputRef}>
            {categories.map(category => (<option value={category.category}>{category.category}</option>))}
          </select>
          <button onClick={showCategoryReportHandler}>Ok</button>
        </div>
      </Modal>}
      <SongList songs={songs}/>
    </Fragment>
  );
}

export default ReportsPage;
