import {useState, useEffect} from 'react'
import Dashboard from '../Dashboard';

interface Data{
    value: number;
}

interface DataVisualization{}

const DataVisualization = () => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        setData([])
    },[])

    const totalData = data.reduce((sum, d) => sum + d.value, 0);
  const averageData = totalData / data.length;


  return (
    <div>
    <Dashboard totalData={totalData} averageData={averageData} />
  </div>
  )
}

export default DataVisualization
