import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-config';
Amplify.configure(awsconfig);

createApp(App).mount('#app');
