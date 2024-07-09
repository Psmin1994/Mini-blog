import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url, reqConfig = {}) => {
  // 가져올 데이터 담을 변수
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // try / catch 문으로 에러 처리
      try {
        const response = await axios(url, reqConfig); // axios(url[, config]) 형태

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false); // 데이터 요청 완료 후 loading 상태 변경
      }
    };

    if (loading) fetchData();
  }, [url, reqConfig, loading]); // url 또는 reqConfig이 변경될 때마다 useEffect 다시 실행

  return { data, error, loading };
};

export default useAxios;
