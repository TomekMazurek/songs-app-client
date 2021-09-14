import axios from "axios";
import baseUrl from "../config/index"
import store from "./index";
import {reportActions} from "./report-slice";

const api = axios.create({baseURL: `${baseUrl}/reports/`});
export const setReportType = (reportType) => {
  return (dispatch) => {
    dispatch(reportActions.setType(reportType));
  }
}

export const fetchData = () => {
  return async (dispatch) => {
    let requestConfig;
    const reportType = store.getState().reports.type;
    switch (reportType) {
      case 'topThree': {
        requestConfig = {
          url: '/top',
          config: {
            params: {value: 3}
          }
        };
        break;
      }
      case 'topTen': {
        requestConfig = {
          url: '/top',
          config: {
            params: {value: 10}
          }
        };
        break;
      }
      case 'category': {
        const category = store.getState().reports.category;
        requestConfig = {
          url: '/category',
          config: {
            params: {category}
          }
        }
        break;
      }
      default: {
        requestConfig = {url: '/'}
        break;
      }
    }
let data;
    await api.get(requestConfig.url, requestConfig.config)
      .then(res => {
        data =res.data;
      })
      .catch(error => console.log(error));
    dispatch(reportActions.updateSongs(data));
  }
}

export const setCategory = (category) => {
  return (dispatch) => {
    dispatch(reportActions.setCategory(category));
  };
}
