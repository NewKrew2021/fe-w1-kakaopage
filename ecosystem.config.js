module.exports = {
  apps : [{
    name: "fe-w1-kakaopage",
    script: './app.js',
    watch: '.',
    watch_delay: 1000,
    ignore_watch: ["node_modules", "/images"],
    watch_options: {
      "followSymlinks": false
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
