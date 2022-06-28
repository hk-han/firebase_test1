<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="onClickButton">test trace</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance, trace } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjadh0PJH-Jiqkwa70qqzF4avXp_O8geI",
  authDomain: "uplusshoptest-d53b8.firebaseapp.com",
  projectId: "uplusshoptest-d53b8",
  storageBucket: "uplusshoptest-d53b8.appspot.com",
  messagingSenderId: "631146911698",
  appId: "1:631146911698:web:660b9964cbe4994fe85a0b",
  measurementId: "G-615Z9GTGX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// Initialize Performance Monitoring and get a reference to the service
// eslint-disable-next-line no-unused-vars
const perf = getPerformance(app);

// perfMetrics.onFirstInputDelay(function(delay, evt) {
//   ga('send', 'event', {
//     eventCategory: 'Perf Metrics',
//     eventAction: 'first-input-delay',
//     eventLabel: evt.type,
//     // Event values must be an integer.
//     eventValue: Math.round(delay),
//     // Exclude this event from bounce rate calculations.
//     nonInteraction: true,
//   });
// });

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    HelloWorld
  },
  methods: {
    onClickButton() {
      console.log('click button')
      const t = trace(perf, "saveImageMessage");

      // TODO: Record image size.
      t.putMetric("imageSize", 400);

      // TODO: Record image MIME type.
      t.putAttribute("imageType", "test234");


      // TODO: Start the "timer" for the custom trace.
      t.start();

      setTimeout(() => {
        console.log('complete')
      },2000)
      // TODO: Stop the "timer" for the custom trace.
      t.stop();
    }
  },
  created() {
    console.log('create')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
