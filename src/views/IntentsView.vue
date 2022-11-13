<template>
  <!-- Page Heading -->
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Intents Configurations</h1>
    {{ errorMessage }}
  </div>
  <div class="col-md-12" v-if="loadingIntents">
    <div class="loader center"></div>
  </div>
  <div class="row" v-if="!loadingIntents">
    <!-- Intents -->
    <div class="col-md-4">
      <div class="card shadow">
        <!-- Card Header - Dropdown -->
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <h6 class="m-0 font-weight-bold text-primary">Intents</h6>
          <a href="#" class="btn btn-success pull-right">
            <i class="fas fa-solid fa-plus"></i>
          </a>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <a href="#">
            <intent-card
              @onDelete="deleteIntent"
              :class="{ active: intent.id === activeId }"
              :intent="intent"
              v-for="intent in intents"
              :key="intent.id"
              @click.prevent="getIntentDetailsbyId(intent.id)"
            ></intent-card>
          </a>
        </div>
      </div>
    </div>

    <!-- Utterances -->
    <div class="col-md-4">
      <div class="card shadow">
        <!-- Card Header - Dropdown -->
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <h6 class="m-0 font-weight-bold text-primary">
            Utterances / Pattern
          </h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="loader center" v-if="loadingIntentDetails"></div>
          <info-card
            class="list-group-item"
            v-for="utterance in selectedIntentDetails.utterances"
            :key="utterance"
            :text="utterance"
          >
          </info-card>
        </div>
      </div>
    </div>

    <!-- Response -->
    <div class="col-md-4">
      <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <h6 class="m-0 font-weight-bold text-primary">Response</h6>
        </div>
        <!-- Card Body -->
        <div class="card-body">
          <div class="loader center" v-if="loadingIntentDetails"></div>
          <info-card
            v-if="selectedIntentDetails.hasOwnProperty('response_message')"
            class="list-group-item"
            :text="selectedIntentDetails.response_message"
          >
          </info-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IntentCard from "../components/IntentCard.vue";
import InfoCard from "../components/InfoCard.vue";
import { useIntents } from "../stores/intents";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";

let activeId = ref("");
const intentsStore = useIntents();

const {
  errorMessage,
  loadingIntents,
  intents,
  selectedIntentDetails,
  loadingIntentDetails,
} = storeToRefs(intentsStore);

function getIntentDetailsbyId(intent_id) {
  intentsStore.getIntentDetails(intent_id);
  activeId.value = intent_id;
}

onMounted(() => {
  intentsStore.getIntents();
});

function deleteIntent(intent) {
  Swal.fire({
    icon: "question",
    title: `Are you sure you want to delete the "${intent.name}" intent?`,
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Deleting and retraining process started!", "", "success");
    }
  });
}
</script>

<style scoped>
.active {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

a:hover {
  text-decoration: none;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.center {
  margin: auto;
}
</style>
