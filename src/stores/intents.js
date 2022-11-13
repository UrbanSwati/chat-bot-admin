import { defineStore } from "pinia";
import axios from "axios";

export const useIntents = defineStore({
  id: "intents",
  state: () => ({
    loadingIntents: false,
    loadingIntentDetails: false,
    errorMessage: "",
    errorMessageIntentDetails: "",
    intents: [],
    selectedIntentDetails: {},
  }),
  actions: {
    getIntents() {
      this.loadingIntents = true;
      this.errorMessage = "";
      this.selectedIntentDetails = {};
      axios
        .get("intents")
        .then((response) => {
          if (response.status !== 200) {
            this.errorMessage = response.data;
          }
          this.intents = response.data.data;
        })
        .catch((error) => {
          this.errorMessage = error;
        })
        .finally(() => (this.loadingIntents = false));
    },
    getIntentDetails(intentId) {
      this.loadingIntentDetails = true;
      this.errorMessageIntentDetails = "";
      this.selectedIntentDetails = {};
      axios
        .get(`intents/${intentId}`)
        .then((response) => {
          if (response.status !== 200) {
            this.errorMessageIntentDetails = response.data;
          }
          this.selectedIntentDetails = response.data.data;
        })
        .catch((error) => {
          this.errorMessageIntentDetails = error;
        })
        .finally(() => (this.loadingIntentDetails = false));
    },
  },
});
