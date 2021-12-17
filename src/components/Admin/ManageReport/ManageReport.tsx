import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, doGetListStatisticByYear } from '../../../redux';
import './ManageReport.scss';
import { Bar } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';

Chart.register(ArcElement);

export const ManageReport = () => {
  const dispatch = useAppDispatch();
  const { listStatistic } = useAppSelector((state) => state.statisticSlice);
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    dispatch(doGetListStatisticByYear({ IDYear: year }));
  }, [year]);

  return (
    <div className="manage-report">
      <div style={{ margin: '20px 0px', width: '150px' }}>
        <p style={{ marginBottom: '10px' }}>Chọn năm:</p>
        <Datetime
          dateFormat="YYYY"
          timeFormat={false}
          value={year.toString()}
          onChange={(date: any) => setYear(date.year())}
        />
      </div>

      <Bar
        data={{
          labels: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
          ],
          datasets: [
            {
              label: 'Lượng đặt hàng',
              data: listStatistic
                ? listStatistic.map((item) => {
                    return item.CountOrder;
                  })
                : [],
              backgroundColor: ['rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(54, 162, 235, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: `Thống kê số lượng bán hàng năm ${year}`,
            },
          },
        }}
      />
    </div>
  );
};
