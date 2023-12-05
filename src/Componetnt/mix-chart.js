import React from 'react'
import Chart from "react-apexcharts";
export const MixChart = () => {
    var series = [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }, {
        name: 'Offline Media',
        type: 'line',
        data: [13, 32, 25, 17, 33, 12, 7, 21, 12, 12, 2, 6]
    }]

    var options = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: [0, 4, 4]
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1, 2]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
            },

        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }],
        // legend: {
        //     show: true,
        //     position: 'right'
        // },
        title: {
            text: 'Traffic Sources',
            style: {
                fontSize: 30
            }
        },
        subtitle: {
            text: 'This chart shows Traffic data of Web, Social Media and Offline',
            style: {
                fontSize: 16,
            }
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        show:true,
                        position: "bottom"
                    }
                }

            }
        ]
    }
    return (
        <div>
            <Chart
                type="line"
                width={600}
                height={350}
                series={series}
                options={options}
            >

            </Chart>
        </div>
    )
}