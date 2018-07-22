import Chart from "chart.js";
import * as React from "react";

export default class extends React.Component {
  private chart: Chart;
  private ref = React.createRef<HTMLCanvasElement>();

  public render() {
    return <canvas ref={this.ref} />;
  }

  public componentDidMount() {
    this.chart = new Chart(this.ref.current, {
      data: {
        datasets: [
          {
            backgroundColor: "yellowgreen",
            data: [0, 0, 7, 12, 13, 30, 34, 32],
            label: "Compost"
          },
          {
            backgroundColor: "cornflowerblue",
            data: [0, 15, 22, 33, 35, 38, 40, 60],
            label: "Recycling"
          },
          {
            backgroundColor: "dimgrey",
            data: [2, 20, 22, 40, 42, 60, 77, 88],
            label: "Garbage"
          }
        ],
        labels: [...new Array(8).keys()].map(hour => hour + 9)
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "time / hour"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "percentage / %"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      type: "line"
    });
  }
}
