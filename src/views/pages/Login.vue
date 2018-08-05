<template>
    <b-row class="justify-content-center">
        <b-col md="8">
            <br>
            <b-card-group>
                <b-card no-body class="p-4">
                    <b-card-body>
                        <b-form>
                            <h1 class="text-head">Login</h1>
                            <p class="text-muted">Sign in to your account</p>
                            <b-input-group class="mb-3">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <fa-icon icon="user"></fa-icon>
                                    </b-input-group-text>
                                </b-input-group-prepend>
    
                                <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email"></b-form-input>
                            </b-input-group>
    
                            <b-input-group class="mb-3">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <fa-icon icon="lock"></fa-icon>
                                    </b-input-group-text>
                                </b-input-group-prepend>
    
                                <b-form-input type="text" class="form-control" placeholder="Password"></b-form-input>
                            </b-input-group>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-card-group>
        </b-col>
    </b-row>
</template>

<style>
    .text-head {
        text-align: center;
    }
    
    .text-muted {
        text-align: center;
    }
</style>
