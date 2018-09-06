<template>
  <b-row class="justify-content-center">
    <b-col md="4">
      <br>
      <b-card-group>
        <b-card title="Movie form">
          <b-card-body>
            <b-form>
              <b-form-group class="mb-3" label="Title">
                <b-form-input v-model="form.title" type="text" class="form-control" placeholder="Title"></b-form-input>
              </b-form-group>
  
              <b-form-group class="mb-3" label="Genre">
                <b-form-input v-model="form.genre" type="text" class="form-control" placeholder="Genre"></b-form-input>
              </b-form-group>
  
              <b-form-group class="mb-3" label="Year">
                <b-form-input v-model="form.year" type="text" class="form-control" placeholder="Year"></b-form-input>
              </b-form-group>
  
              <b-form-group class="mb-3" label="Author">
                <b-form-input v-model="form.author" type="text" class="form-control" placeholder="Author"></b-form-input>
              </b-form-group>
  
              <b-button variant="success" v-if="mode=='add'" @click="addData()">Save</b-button>
              <b-button variant="outline-success" v-if="mode=='edit'" @click="updateData()">Update</b-button>
              <b-button variant="outline-success" v-if="mode=='edit'" @click="resetData()">Cancel</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </b-card-group>
    </b-col>

    <b-col md="8">
      <br>
      <b-card-group>
        <b-card title="Movie list">
          <b-table :fields="fields" :items="movies">
            <template class="pad" slot="action" slot-scope="row">
                    <b-button class="btn-edit" variant="warning" @click="editData(row.item)"><fa-icon icon="edit"></fa-icon></b-button>
                    <b-button variant="danger" @click="deleteData(row.index, row.item.id)"><fa-icon icon="trash-alt"></fa-icon></b-button>
</template>
          </b-table>
        </b-card>
      </b-card-group>

      <li>
        <ul>{{ movies }}</ul>
      </li>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

const list_url = "http://127.0.0.1:8000/service/movie/list";
const add_url = "http://127.0.0.1:8000/service/movie/create";
const delete_url = "http://127.0.0.1:8000/service/movie/delete/";
const update_url = "http://127.0.0.1:8000/service/movie/update/";

export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID"
        },
        {
          key: "title",
          label: "TITLE"
        },
        {
          key: "genre",
          label: "GENRE"
        },
        {
          key: "year",
          label: "YEAR"
        },
        {
          key: "author",
          label: "AUTHOR"
        },
        {
          key: "action",
          label: "ACTION"
        }
      ],
      movies: [],
      mode: "add",
      form: {
        title: "",
        genre: "",
        year: "",
        author: ""
      }
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData: function() {
      axios.get(list_url).then(response => (this.movies = response.data));
    },

    addData: function() {
      axios
        .post(add_url, this.form)
        .then(response => (this.movies = response.data));
    },

    editData: function(movie) {
      this.mode = "edit";
      this.form.id = movie.id;
      this.form.title = movie.title;
      this.form.genre = movie.genre;
      this.form.year = movie.year;
      this.form.author = movie.author;
    },

    resetData: function() {
      this.mode = "add";
      this.form = {
        title: "",
        genre: "",
        year: "",
        author: ""
      };
    },

    updateData: function() {
      axios.post(update_url + this.form.id, this.form);
      this.mode = "add";
      this.movies = [];
      this.loadData();
    },

    deleteData: function(index, id) {
      axios.get(delete_url + id).then(this.movies.splice(index, 1));
    }
  }
};
</script>

<style>
.justify-content-center {
  width: 100%;
}
</style>
