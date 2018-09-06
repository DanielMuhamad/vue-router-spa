import VueChart from 'vue-chartjs'


export default {
    extends: VueChart.Line,
    mixins: [VueChart.mixins.reactiveProp],
    props: ['chartData', 'options'],
    mounted() {
        this.renderChart(this.chartData, this.options)
    },
}