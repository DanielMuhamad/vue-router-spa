import {Bar} from 'vue-chartjs'

export default {
    extends: Bar,
    mounted() {
        this.renderChart({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Github Commits',
                    backgroundColor: '#00c372',
                    data: [40, 20, 12, 39, 11, 40, 39, 65, 40, 20, 12, 11]
                }
            ]
        })
    },
}