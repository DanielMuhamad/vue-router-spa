<template>
    <div id="app">
        <br>
        <b-row>
            <b-col cols="6">
                <commit-chart></commit-chart>
            </b-col>
    
            <b-col cols="6">
                <commit-chart></commit-chart>
            </b-col>
        </b-row>
    
        <b-row>
            <b-col cols="6">
                <line-chart></line-chart>
            </b-col>
    
            <b-col cols="6">
                <line-mixin-chart></line-mixin-chart>
            </b-col>
        </b-row>
    
        <b-row>
            <b-col cols="6">
                <pie-chart :ratio=0.42 :percent=42 :stroke-width=1 label="42 %" label-small="" color=#40a070 :opacity=0.7></pie-chart>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import commitChart from "./../../charts/commitChart.js";
    import lineChart from "./../../charts/lineChart.js";
    import lineMixinChart from "./../../charts/lineMixinChart.js";
    import pieChart from "./../../charts/pieChart.js";
    
    export default {
        components: {
            "commit-chart": commitChart,
            "line-chart": lineChart,
            "line-mixin-chart": lineMixinChart,
            "pie-chart": pieChart
        }
    };
</script>