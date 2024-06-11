<script setup>
import { ref } from "vue";
// import MyCard from "@/components/card.vue";
// import Footer from "@/components/footer.vue"

const data = ref(JSON.parse(localStorage.getItem("data")))

</script>

<template>
  <div id="layout-wrapper">
    <br>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>TP - Rappel JAVASCRIPT</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-sm-4">
                  <div class="search-box me-2 mb-2 d-inline-block">
                    <div class="position-relative">
                      <input type="text" class="form-control" autocomplete="off" id="rechercherData"
                        placeholder="Rechercher..." v-on:keydown.enter="submitSearch">
                      <i class="mdi mdi-clipboard-text-search-outline search-icon"></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="text-sm-end">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#add"
                      class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2 addOrder-modal">
                      <i class="mdi mdi-plus me-1"></i>
                      Ajouter nouveau donnée
                    </button>
                  </div>
                </div>
              </div>
              <hr>
              <div class="row">
                <my-card v-for="(q, i) in data" :id="q.id" :name="q.name" :email="q.email" :devise="q.devise"></my-card>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
</template>

<style scoped></style>
