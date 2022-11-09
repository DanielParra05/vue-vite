const awsconfig = {
  Auth: {
    identityPoolId: `${import.meta.env.VITE_APP_IDENTITY_POOL_ID}`,
    region: `${import.meta.env.VITE_APP_REGION}`,
    identityPoolRegion: `${import.meta.env.VITE_APP_REGION}`,
    userPoolId: `${import.meta.env.VITE_APP_USER_POOL_ID}`,
    userPoolWebClientId: `${import.meta.env.VITE_APP_USER_POOL_CLIENT_ID}`,
  },
};

export default awsconfig;
