<template>
    <b-row class="justify-content-center">
        <b-col md=4>
            <br>
            <b-card-group>
                <b-card title="User Input">
                    <b-card-body>
                        <b-form>
                            <b-form-group label="Name">
                                <b-form-input type="text" class="form-control" placeholder="Type your name"></b-form-input>
                            </b-form-group>
    
                            <b-form-group label="Email">
                                <b-form-input type="email" class="form-control" placeholder="Type your email"></b-form-input>
                            </b-form-group>
    
                            <b-button variant="success">Save</b-button>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-card-group>
        </b-col>

        <b-col md=8>
            <br>
            <b-card-group>
                <b-card title="List User">
                    <b-table :fields="fields" :items="users">
    
                    </b-table>
                </b-card>
            </b-card-group>
    
            <li>
                <ul>{{ users }}</ul>
            </li>
        </b-col>
    </b-row>
</template>

<script>
import axios from "axios";

const list_url = "http://0.0.0.0:8088/service/v0.1/user";

export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID"
        },
        {
          key: "name",
          label: "NAME"
        },
        {
          key: "email",
          label: "EMAIL"
        },
        {
          key: "action",
          label: "ACTION"
        }
      ],
      users: []
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData: function() {
      axios.get(list_url).then(response => (this.users = response.data));
    }
  }
};
</script>