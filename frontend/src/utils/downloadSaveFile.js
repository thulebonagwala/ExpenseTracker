import { saveAs } from "file-saver";
import { BASE_URL } from "./apiPaths";
import api from "./axiosInstance";

const handleDownload = async (year) => {
  try {
    const res = await api.get(`${BASE_URL}/api/v1/report/yearly/csv?year=${year}`, {
      responseType: "blob", // important to get binary data
    });

    const blob = new Blob([res.data], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `yearly-report-${year}.csv`);
  } catch (err) {
    console.error("Download failed", err);
  }
};

export default handleDownload;
