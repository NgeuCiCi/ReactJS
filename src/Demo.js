import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
const data = [
    { region: 'Desktop', val: 2305.35 },
    { region: 'Mobile', val: 1184.4 },
    { region: 'Tablets', val: 740.25 },

];

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };

    }

    render() {
        const { data: chartData, targetItem } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}
                >

                    <PieSeries
                        valueField="val"
                        argumentField="region"
                        innerRadius={0.9}
                    />
                    <Title
                        text="Sales Report"
                    />
                    <Animation />

                </Chart>
            </Paper>
        );
    }
}