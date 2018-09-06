<template>
    <div id="setup">
        <b-row class="justify-content-center">
            <b-col md=4>
                <br>
                <b-card-group>
                    <b-card title="Setup Lomba">
                        <b-card-body>
                            <b-form>
                                <b-form-group label="Nama Lomba">
                                    <b-form-input type="text" class="form-control" placeholder="Nama lomba"></b-form-input>
                                </b-form-group>
    
                                <b-form-group label="Tempat">
                                    <b-form-input type="text" class="form-control" placeholder="Alamat lomba"></b-form-input>
                                </b-form-group>
    
                                <b-form-group label="Kategori Lomba">
                                    <b-form-select v-model="selected" :options="kategorilomba">
                                    </b-form-select>
                                </b-form-group>
    
                                <b-form-group label="Range">
                                    <b-form-select v-model="selected" :options="range">
                                    </b-form-select>
                                </b-form-group>
    
                                <b-form-group label="Jenis Target">
                                    <b-form-select v-model="selected" :options="target">
                                    </b-form-select>
                                </b-form-group>

                                <b-button variant="success">Save</b-button>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-card-group>
            </b-col>

            <b-col>
                <br>
                <b-card-group>
                    <b-card title="List Data">
                        <b-card-body>
                            <b-table>
                                
                            </b-table>
                        </b-card-body>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'setup',
        data() {
            return {
                selected: null,
                kategorilomba: [
                    {value: null, text: '-- Pilih --'},
                    {value: 'SD Putra', text: 'Recurve SD Putra'},
                    {value: 'SD Putri', text: 'Recurve SD Putri'},
                    {value: 'Recurve Putra', text: 'Recurve Dewasa Putra'},
                    {value: 'Recurve Putri', text: 'Recurve Dewasa Putri'},
                    {value: 'Compound Putra', text: 'Compound Dewasa Putra'},
                    {value: 'Compound Putri', text: 'Compound Dewasa Putri'},
                    {value: 'Horsebow Putra', text: 'Horsebow Dewasa Putra'},
                    {value: 'Horsebow Putri', text: 'Horsebow Dewasa Putri'}
                ],

                range: [
                    {value: null, text: '-- Pilih --'},
                    {value: '10', text: '10 Meter'},
                    {value: '15', text: '15 Meter'},
                    {value: '20', text: '20 Meter'},
                    {value: '30', text: '30 Meter'},
                    {value: '40', text: '40 Meter'},
                    {value: '45', text: '45 Meter'},
                    {value: '50', text: '50 Meter'},
                    {value: '70', text: '70 Meter'},
                    {value: '90', text: '90 Meter'},
                ],

                target: [
                    {value: null, text: '-- Pilih --'},
                    {value: 'Puta', text: 'Puta Target'},
                    {value: '40', text: 'Standar 40cm'},
                    {value: '60', text: 'Standar 60cm'},
                    {value: '80', text: 'Standar 80cm'},
                    {value: '100', text: 'Standar 100cm'},
                    {value: '120', text: 'Standar 120cm'},
                ]
            }
        }
    }
</script>