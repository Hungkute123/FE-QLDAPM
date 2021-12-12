import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, doGetListStatisticByYear } from '../../../redux';
import './SellerReport.scss';
import { Line } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(ArcElement);

export const SellerReport = () => {
  const dispatch = useAppDispatch();
  const { listStatistic } = useAppSelector((state) => state.statisticSlice);

  useEffect(() => {
    dispatch(doGetListStatisticByYear({ IDYear: 2021 }));
  }, []);

  return (
    <div className="seller-report">
      <Line
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
              label: 'Số người đăng ký mới',
              data: listStatistic
                ? listStatistic.map((item) => {
                    return item.CountUserRegister;
                  })
                : [],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
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
              text: 'Thống kê lượt đăng ký mới',
            },
          },
        }}
      />
    </div>
  );
};
