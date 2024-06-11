<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true

    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    devise: {
        type: String,
        default: "USD"
    }
});

</script>

<template>
    <div class="col-sm-4">
        <div class="card border border-secondary">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-shrink-0 me-4">
                        <i v-if="props.devise === 'USD'" class="mdi mdi-currency-usd text-success h1"></i>
                        <i v-else-if="props.devise === 'EUR'" class="mdi mdi-currency-eur text-success h1"></i>
                        <i v-else-if="props.devise === 'GBP'" class="mdi mdi-currency-gbp text-success h1"></i>
                        <i v-else-if="props.devise === 'JPY'" class="mdi mdi-currency-jpy text-success h1"></i>
                        <i v-else class="mdi mdi-currency-usd-off text-success h1"></i>
                    </div>
                    <div class="flex-grow-1">
                        <div class="text-muted">
                            <h5>{{ props.name }}</h5>
                            <p class="mb-1">{{ props.email }}</p>
                            <p class="mb-0">Id n° : {{ props.id }}</p>
                        </div>
                    </div>
                    <div class="dropdown ms-2">
                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" style="">
                            <a class="dropdown-item" data-bs-toggle="modal" :data-bs-target="'#edit' + props.id"
                                href="#"><i class="mdi mdi-file-document-edit"></i><label
                                    class="ms-2"></label>Modifier</a>
                            <a class="dropdown-item" data-bs-toggle="modal" :data-bs-target="'#remove' + props.id"
                                href="#"><i class="mdi mdi-delete"></i><label class="ms-2"></label>Supprimer</a>
                        </div>
                        <div class="modal fade" :id="'remove' + props.id" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-sm">
                                <div class="modal-content">
                                    <div class="modal-body px-4 py-5 text-center">
                                        <button type="button" class="btn-close position-absolute end-0 top-0 m-3"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="avatar-sm mb-4 mx-auto">
                                            <div
                                                class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
                                                <i class="mdi mdi-trash-can-outline"></i>
                                            </div>
                                        </div>
                                        <p class="text-muted font-size-16 mb-4">Êtes-vous sûr de vouloir supprimer {{
                                            props.name }} ?</p>

                                        <div class="hstack gap-2 justify-content-center mb-0">
                                            <button type="button" class="btn btn-secondary"
                                                id="close-removeProductModal" data-bs-dismiss="modal">Fermer</button>
                                            <a type="button" class="btn btn-danger" id="remove-item"
                                                data-bs-dismiss="modal" @click="supprimer(props.id)">Supprimer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" :id="'edit' + props.id" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            style="display: none;" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="ajouterclientModalLabel">Modifier un donnée dans
                                            {{ props.name }}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form method="post" onsubmit="modifierData(event, {{ props.id }})">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <input type="hidden" class="form-control" id="orderid-input"
                                                        value="">
                                                    <div class="mb-3">
                                                        <label for="nom_edit" class="form-label">Nom :</label>
                                                        <input :value="props.name" type="text" name="nom_edit"
                                                            id="nom_edit${data.id}" class="form-control"
                                                            placeholder="Entrer le nom" required="">
                                                        <div class="invalid-feedback">Veuillez saisir le nom.</div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="email_edit" class="form-label">Email :</label>
                                                        <input :value="props.email" type="email" name="email_edit"
                                                            id="email_edit${data.id}" class="form-control"
                                                            placeholder="Entrer le émail" required="">
                                                        <div class="invalid-feedback">Veuillez saisir l'émail.</div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="devise_edit" class="form-label">Devise :</label>
                                                        <select name="devise" id="devise_edit${data.id}"
                                                            class="form-control" required>
                                                            <option value="" selected>Sélectionner une devise</option>
                                                            <option value="MGA" :selected="props.devise === 'MGA'">Ariary malgache</option>
                                                            <option value="USD" :selected="props.devise === 'USD'">Dollar américain</option>
                                                            <option value="EUR" :selected="props.devise === 'EUR'">Euro</option>
                                                            <option value="GBP" :selected="props.devise === 'GBP'">Livre sterling</option>
                                                            <option value="JPY" :selected="props.devise === 'JPY'">Yen japonais</option>
                                                        </select>
                                                        <div class="invalid-feedback">Veuillez sélectionner une devise.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="text-end">
                                                        <button type="reset" class="btn btn-outline-secondary col-md-5"
                                                            data-bs-dismiss="modal">Annuler</button>
                                                        <button type="submit" name="submit" class="btn btn-success col-md-5"
                                                            data-bs-dismiss="modal">Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>